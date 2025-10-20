<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        return response()->json(Producto::with(['categoria', 'genero'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:150',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
            'categoria_id' => 'required|exists:categorias,id',
            'genero_id' => 'required|exists:generos,id',
        ]);

        $producto = Producto::create($validated);
        return response()->json($producto->load(['categoria', 'genero']), 201);
    }

    public function show(Producto $product)
    {
        return response()->json($product->load(['categoria', 'genero', 'variantes', 'valoraciones', 'comentarios']));
    }

    public function update(Request $request, Producto $product)
    {
        $validated = $request->validate([
            'nombre' => 'string|max:150',
            'descripcion' => 'nullable|string',
            'precio' => 'numeric|min:0',
            'categoria_id' => 'exists:categorias,id',
            'genero_id' => 'exists:generos,id',
        ]);

        $product->update($validated);
        return response()->json($product->load(['categoria', 'genero']));
    }

    public function destroy(Producto $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
