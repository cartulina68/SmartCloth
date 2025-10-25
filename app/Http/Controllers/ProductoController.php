<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Categorias;
use App\Models\Genero;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::with(['categoria', 'genero'])->get();
        $categorias = Categorias::all();
        $generos = Genero::all();

        return Inertia::render('productos/index', [
            'productos' => $productos,
            'categorias' => $categorias,
            'generos' => $generos,
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
        ]);

        Producto::create($validated);

        return redirect()->intended(route('productos.index', absolute: false));
    }

    public function show(Producto $producto)
    {
        return response()->json(
            $producto->load(['categoria', 'genero', 'variantes', 'valoraciones', 'comentarios'])
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
