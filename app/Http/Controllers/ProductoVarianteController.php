<?php

namespace App\Http\Controllers;

use App\Models\ProductoVariante;
use App\Models\Producto;
use App\Models\Color;
use App\Models\Talla;
use App\Models\Imagen;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoVarianteController extends Controller
{
    public function index()
    {
        $variantes = ProductoVariante::with(['producto', 'color', 'talla', 'imagen'])->get();
        $productos = Producto::all();
        $colores = Color::all();
        $tallas = Talla::all();
        $imagenes = Imagen::all();

        return Inertia::render('producto_variantes/index', [
            'variantes' => $variantes,
            'productos' => $productos,
            'colores' => $colores,
            'tallas' => $tallas,
            'imagenes' => $imagenes,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'producto_id' => 'required|exists:productos,id',
            'color_id' => 'required|exists:colores,id',
            'talla_id' => 'required|exists:tallas,id',
            'imagen_id' => 'nullable|exists:imagenes,id',
            'stock' => 'required|integer|min:0',
            'precio' => 'required|numeric|min:0',
        ]);

        ProductoVariante::create($validated);

        return redirect()->intended(route('producto_variantes.index', absolute: false));
    }

    public function show(ProductoVariante $productoVariante)
    {
        return response()->json(
            $productoVariante->load(['producto', 'color', 'talla', 'imagen'])
        );
    }

    public function update(Request $request, ProductoVariante $productoVariante)
    {
        $validated = $request->validate([
            'color_id' => 'exists:colores,id',
            'talla_id' => 'exists:tallas,id',
            'imagen_id' => 'nullable|exists:imagenes,id',
            'stock' => 'integer|min:0',
            'precio' => 'numeric|min:0',
        ]);

        $productoVariante->update($validated);

        return response()->json($productoVariante->load(['producto', 'color', 'talla', 'imagen']));
    }

    public function destroy(ProductoVariante $productoVariante)
    {
        $productoVariante->delete();
        return response()->json(null, 204);
    }
}
