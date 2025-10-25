<?php

namespace App\Http\Controllers;

use App\Models\Talla;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TallaController extends Controller
{
    public function index()
    {
        $tallas = Talla::all();
        return Inertia::render('tallas/index', ['tallas' => $tallas]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|max:10|unique:tallas,key',
            'nombre' => 'required|string|max:50',
            'orden' => 'nullable|integer',
        ]);

        Talla::create($validated);

        return redirect()->route('tallas.index');
    }

    public function show(Talla $talla)
    {
        return response()->json($talla);
    }

    public function update(Request $request, Talla $talla)
    {
        $validated = $request->validate([
            'key' => 'required|string|max:10|unique:tallas,key,' . $talla->id,
            'nombre' => 'required|string|max:50',
            'orden' => 'nullable|integer',
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
