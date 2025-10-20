<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    public function index()
    {
        return response()->json(Comentario::with(['usuario', 'producto'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'usuario_id' => 'required|exists:users,id',
            'producto_id' => 'required|exists:products,id',
            'contenido' => 'required|string',
        ]);

        $comentario = Comentario::create($validated);
        return response()->json($comentario->load(['usuario', 'producto']), 201);
    }

    public function show(Comentario $comentario)
    {
        return response()->json($comentario->load(['usuario', 'producto']));
    }

    public function destroy(Comentario $comentario)
    {
        $comentario->delete();
        return response()->json(null, 204);
    }
}
