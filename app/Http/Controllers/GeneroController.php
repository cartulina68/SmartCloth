<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneroController extends Controller
{
    public function index()
    {
        $generos = Genero::all();
        return Inertia::render('generos/index', ['generos' => $generos]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'genero' => 'required|string|max:50',
        ]);

        Genero::create($validated);

        return redirect()->intended(route('generos.index', absolute: false));
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
