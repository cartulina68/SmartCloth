<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductoVariante extends Model
{
    use HasFactory;

    protected $table = 'producto_variantes';

    protected $fillable = [
        'producto_id',
        'color_id',
        'talla_id',
        'stock',
        'precio'
    ];

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'producto_id');
    }

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    public function talla()
    {
        return $this->belongsTo(Talla::class, 'talla_id');
    }

    public function imagenes()
    {
        return $this->belongsToMany(Imagen::class, 'variante_imagenes', 'variante_id', 'imagen_id')
            ->withPivot('orden')
            ->orderBy('orden')
            ->withTimestamps();
    }
}
