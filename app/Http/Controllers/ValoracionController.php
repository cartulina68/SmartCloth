<?php

namespace App\Http\Controllers;

use App\Models\Valoracion;
use Illuminate\Http\Request;

class ValoracionController extends Controller
{
    public function index()
    {
        return response()->json(Valoracion::with(['usuario', 'producto'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|exists:users,id',
            'producto_id' => 'required|exists:products,id',
            'puntuacion' => 'required|integer|min:1|max:5',
        ]);

        $valoracion = Valoracion::create($validated);
        return response()->json($valoracion->load(['usuario', 'producto']), 201);
    }

    public function show(Valoracion $valoracion)
    {
        return response()->json($valoracion->load(['usuario', 'producto']));
    }

    public function destroy(Valoracion $valoracion)
    {
        $valoracion->delete();
        return response()->json(null, 204);
    }
}
