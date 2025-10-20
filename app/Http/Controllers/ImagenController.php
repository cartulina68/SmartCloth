<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{
    public function index()
    {
        return response()->json(Imagen::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'path' => 'required|string|max:255',
        ]);

        $imagen = Imagen::create($validated);
        return response()->json($imagen, 201);
    }

    public function show(Imagen $imagen)
    {
        return response()->json($imagen);
    }

    public function destroy(Imagen $imagen)
    {
        $imagen->delete();
        return response()->json(null, 204);
    }
}
