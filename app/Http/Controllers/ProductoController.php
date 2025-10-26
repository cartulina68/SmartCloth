<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Categorias;
use App\Models\Genero;
use App\Models\Imagen;
use App\Models\Color;
use App\Models\Talla;
use Illuminate\Http\Request;
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
        return response()->json(
            $producto->load(['categoria', 'genero', 'variantes'])
        );
    }

    public function update(Request $request, Producto $producto)
    {
        $validated = $request->validate([
            'nombre' => 'string|max:150',
            'descripcion' => 'nullable|string',
            'precio' => 'numeric|min:0',
            'categoria_id' => 'exists:categorias,id',
            'genero_id' => 'exists:generos,id',
        ]);

        $producto->update($validated);

        return response()->json($producto->load(['categoria', 'genero']));
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();
        return response()->json(null, 204);
    }
}
