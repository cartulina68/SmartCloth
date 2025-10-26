<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class VarianteImagen extends Pivot
{
    protected $table = 'variante_imagenes';

    protected $fillable = [
        'variante_id',
        'imagen_id',
        'orden'
    ];

    public function variante()
    {
        return $this->belongsTo(ProductoVariante::class, 'variante_id');
    }

    public function imagen()
    {
        return $this->belongsTo(Imagen::class, 'imagen_id');
    }
}
