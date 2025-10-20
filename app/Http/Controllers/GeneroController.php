<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use Illuminate\Http\Request;

class GeneroController extends Controller
{
    public function index()
    {
        return response()->json(Genero::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'genero' => 'required|string|max:50',
        ]);

        $genero = Genero::create($validated);
        return response()->json($genero, 201);
    }

    public function show(Genero $genero)
    {
        return response()->json($genero);
    }

    public function update(Request $request, Genero $genero)
    {
        $validated = $request->validate([
            'genero' => 'required|string|max:50',
        ]);

        $genero->update($validated);
        return response()->json($genero);
    }

    public function destroy(Genero $genero)
    {
        $genero->delete();
        return response()->json(null, 204);
    }
}
