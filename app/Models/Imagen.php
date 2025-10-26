<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Imagen extends Model
{
    use HasFactory;

    protected $table = 'imagenes';

    protected $fillable = ['path', 'descripcion'];

    public function variantes()
    {
        return $this->belongsToMany(ProductoVariante::class, 'variante_imagenes', 'imagen_id', 'variante_id')
            ->withPivot('orden')
            ->orderBy('orden')
            ->withTimestamps();
    }
}
