<?php

namespace App\Http\Controllers;

use App\Models\Talla;
use Illuminate\Http\Request;

class TallaController extends Controller
{
    public function index()
    {
        return response()->json(Talla::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
        ]);

        $talla = Talla::create($validated);
        return response()->json($talla, 201);
    }

    public function show(Talla $talla)
    {
        return response()->json($talla);
    }

    public function update(Request $request, Talla $talla)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:50',
        ]);

        $talla->update($validated);
        return response()->json($talla);
    }

    public function destroy(Talla $talla)
    {
        $talla->delete();
        return response()->json(null, 204);
    }
}
