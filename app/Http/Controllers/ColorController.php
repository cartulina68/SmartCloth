<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ColorController extends Controller
{
    public function index()
    {
        $colores = Color::all();
        return Inertia::render('colores/index', ['colores' => $colores]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
            'codigo_hex' => 'nullable|string|max:10',
        ]);

        Color::create($validated);

        return redirect()->intended(route('colores.index', absolute: false));
    }

    public function show(Color $color)
    {
        return response()->json($color);
    }

    public function update(Request $request, Color $color)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
            'codigo_hex' => 'nullable|string|max:10',
        ]);

        $color->update($validated);

        return response()->json($color);
    }

    public function destroy(Color $color)
    {
        $color->delete();

        return response()->json(null, 204);
    }
}
