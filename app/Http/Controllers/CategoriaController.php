<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categorias::all();
        return Inertia::render('categorias/index', ['categorias' => $categorias]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ]);

        $categoria = Categorias::create($validated);

        return redirect()->intended(route('categorias.index', absolute: false));
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
