<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        return response()->json(Categorias::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $categoria = Categorias::create($validated);
        return response()->json($categoria, 201);
    }

    public function show(Categorias $categoria)
    {
        return response()->json($categoria);
    }

    public function update(Request $request, Categorias $categoria)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $categoria->update($validated);
        return response()->json($categoria);
    }

    public function destroy(Categorias $categoria)
    {
        $categoria->delete();
        return response()->json(null, 204);
    }
}
