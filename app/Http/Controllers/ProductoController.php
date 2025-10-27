<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Categorias;
use App\Models\Genero;
use App\Models\Imagen;
use App\Models\Color;
use App\Models\Talla;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductoController extends Controller
{
    public function index()
    {
        $generos = Genero::all();
        $categorias = Categorias::all();
        $productos = Producto::with(['categoria', 'genero'])->get();

        return Inertia::render('productos/index', [
            'generos' => $generos,
            'productos' => $productos,
            'categorias' => $categorias,
        ]);
    }

    public function create()
    {
        return Inertia::render('productos/create', [
            'categorias' => Categorias::all(),
            'generos' => Genero::all(),
            'colores' => Color::all(),
            'tallas' => Talla::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:150',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
            'categoria_id' => 'required|exists:categorias,id',
            'genero_id' => 'required|exists:generos,id',
            'variantes' => 'required|array|min:1',
            'variantes.*.color_id' => 'required|exists:colores,id',
            'variantes.*.talla_id' => 'required|exists:tallas,id',
            'variantes.*.precio' => 'required|numeric|min:0',
            'variantes.*.stock' => 'required|integer|min:0',
            'variantes.*.imagenes' => 'required|array|min:1',
            'variantes.*.imagenes.*' => 'required|image|max:10240',
        ]);

        $producto = Producto::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'],
            'precio' => $validated['precio'],
            'categoria_id' => $validated['categoria_id'],
            'genero_id' => $validated['genero_id'],
        ]);

        foreach ($validated['variantes'] as $varianteData) {
            $imagenes = [];

            // Procesar y guardar las imágenes
            foreach ($varianteData['imagenes'] as $imagen) {
                $path = $imagen->store('productos', 'public');
                $imagen = Imagen::create([
                    'path' => $path,
                    'descripcion' => $producto->nombre,
                ]);
                $imagenes[] = $imagen;
            }

            // Crear la variante
            $variante = $producto->variantes()->create([
                'color_id' => $varianteData['color_id'],
                'talla_id' => $varianteData['talla_id'],
                'precio' => $varianteData['precio'],
                'stock' => $varianteData['stock'],
            ]);

            // Asociar las imágenes con la variante
            foreach ($imagenes as $index => $imagen) {
                $variante->imagenes()->attach($imagen->id, ['orden' => $index]);
            }
        }

        return redirect()->intended(route('productos.index', absolute: false));
    }

    public function show(Producto $producto)
    {
        return Inertia::render('productos/edit', [
            'producto' => $producto->load([
                'categoria',
                'genero',
                'variantes.imagenes',
                'variantes.color',
                'variantes.talla'
            ]),
            'categorias' => Categorias::all(),
            'generos' => Genero::all(),
            'colores' => Color::all(),
            'tallas' => Talla::all(),
        ]);
    }

    public function update(Request $request, Producto $producto)
    {
        Log::info('Actualizando producto ID: ', $producto->toArray());
        Log::info('Datos recibidos: ', $request->all());
        $validated = $request->validate([
            'nombre' => 'required|string|max:150',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
            'categoria_id' => 'required|exists:categorias,id',
            'genero_id' => 'required|exists:generos,id',
            'variantes' => 'required|array|min:1',
            'variantes.*.id' => 'nullable|exists:producto_variantes,id',
            'variantes.*.color_id' => 'required|exists:colores,id',
            'variantes.*.talla_id' => 'required|exists:tallas,id',
            'variantes.*.precio' => 'required|numeric|min:0',
            'variantes.*.stock' => 'required|integer|min:0',
            'variantes.*.imagenes_nuevas' => 'nullable|array',
            'variantes.*.imagenes_nuevas.*' => 'required|image|max:10240',
            'variantes.*.imagenes_eliminar' => 'nullable|array',
            'variantes.*.imagenes_eliminar.*' => 'integer|exists:imagenes,id',
            'variantes_eliminar' => 'nullable|array',
            'variantes_eliminar.*' => 'integer|exists:producto_variantes,id',
        ]);

        // Actualizar información básica del producto
        $producto->update([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'],
            'precio' => $validated['precio'],
            'categoria_id' => $validated['categoria_id'],
            'genero_id' => $validated['genero_id'],
        ]);

        // Eliminar variantes marcadas para eliminación
        if (!empty($validated['variantes_eliminar'])) {
            foreach ($validated['variantes_eliminar'] as $varianteId) {
                $variante = $producto->variantes()->find($varianteId);
                if ($variante) {
                    // Eliminar imágenes asociadas
                    foreach ($variante->imagenes as $imagen) {
                        Storage::disk('public')->delete($imagen->path);
                        $imagen->delete();
                    }

                    $variante->delete();
                }
            }
        }

        // Procesar variantes
        foreach ($validated['variantes'] as $varianteData) {
            if (!empty($varianteData['id'])) {
                // Actualizar variante existente
                $variante = $producto->variantes()->find($varianteData['id']);
                if ($variante) {
                    $variante->update([
                        'color_id' => $varianteData['color_id'],
                        'talla_id' => $varianteData['talla_id'],
                        'precio' => $varianteData['precio'],
                        'stock' => $varianteData['stock'],
                    ]);

                    // Eliminar imágenes marcadas
                    if (!empty($varianteData['imagenes_eliminar'])) {
                        foreach ($varianteData['imagenes_eliminar'] as $imagenId) {
                            $imagen = Imagen::find($imagenId);
                            if ($imagen) {
                                Storage::disk('public')->delete($imagen->path);
                                $variante->imagenes()->detach($imagenId);
                                $imagen->delete();
                            }
                        }
                    }

                    // Agregar nuevas imágenes
                    if (!empty($varianteData['imagenes_nuevas'])) {
                        $currentMaxOrder = $variante->imagenes()->max('producto_variante_imagen.orden') ?? -1;
                        foreach ($varianteData['imagenes_nuevas'] as $index => $imagen) {
                            $path = $imagen->store('productos', 'public');
                            $nuevaImagen = Imagen::create([
                                'path' => $path,
                                'descripcion' => $producto->nombre,
                            ]);
                            $variante->imagenes()->attach($nuevaImagen->id, [
                                'orden' => $currentMaxOrder + $index + 1
                            ]);
                        }
                    }
                }
            } else {
                // Crear nueva variante
                $imagenes = [];

                // Procesar y guardar las imágenes
                if (!empty($varianteData['imagenes_nuevas'])) {
                    foreach ($varianteData['imagenes_nuevas'] as $imagen) {
                        $path = $imagen->store('productos', 'public');
                        $imagen = Imagen::create([
                            'path' => $path,
                            'descripcion' => $producto->nombre,
                        ]);
                        $imagenes[] = $imagen;
                    }
                }

                // Crear la variante
                $variante = $producto->variantes()->create([
                    'color_id' => $varianteData['color_id'],
                    'talla_id' => $varianteData['talla_id'],
                    'precio' => $varianteData['precio'],
                    'stock' => $varianteData['stock'],
                ]);

                // Asociar las imágenes con la variante
                foreach ($imagenes as $index => $imagen) {
                    $variante->imagenes()->attach($imagen->id, ['orden' => $index]);
                }
            }
        }

        return redirect()->intended(route('productos.index', absolute: false));
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->intended(route('productos.index', absolute: false));
    }
}
