<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    public function index()
    {
        return response()->json(Color::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'color' => 'required|string|max:50',
            'hex' => 'required|string|max:7',
        ]);

        $color = Color::create($validated);
        return response()->json($color, 201);
    }

    public function show(Color $color)
    {
        return response()->json($color);
    }

    public function update(Request $request, Color $color)
    {
        $validated = $request->validate([
            'color' => 'required|string|max:50',
            'hex' => 'required|string|max:7',
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
