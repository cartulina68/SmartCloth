<?php

namespace App\Http\Controllers;

use App\Models\ProductoVariante;
use Illuminate\Http\Request;

class ProductoVarianteController extends Controller
{
    public function index()
    {
        return response()->json(ProductoVariante::with(['producto', 'color', 'talla', 'imagen'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'producto_id' => 'required|exists:products,id',
            'color_id' => 'required|exists:colores,id',
            'talla_id' => 'required|exists:tallas,id',
            'imagen_id' => 'nullable|exists:imagenes,id',
            'stock' => 'required|integer|min:0',
            'precio' => 'required|numeric|min:0',
        ]);

        $variante = ProductoVariante::create($validated);
        return response()->json($variante->load(['producto', 'color', 'talla', 'imagen']), 201);
    }

    public function show(ProductoVariante $productVariante)
    {
        return response()->json($productVariante->load(['producto', 'color', 'talla', 'imagen']));
    }

    public function update(Request $request, ProductoVariante $productVariante)
    {
        $validated = $request->validate([
            'color_id' => 'exists:colores,id',
            'talla_id' => 'exists:tallas,id',
            'imagen_id' => 'nullable|exists:imagenes,id',
            'stock' => 'integer|min:0',
            'precio' => 'numeric|min:0',
        ]);

        $productVariante->update($validated);
        return response()->json($productVariante->load(['producto', 'color', 'talla', 'imagen']));
    }

    public function destroy(ProductoVariante $productVariante)
    {
        $productVariante->delete();
        return response()->json(null, 204);
    }
}
