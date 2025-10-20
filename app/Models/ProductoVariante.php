<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductoVariante extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'color_id', 'talla_id', 'imagen_id', 'stock', 'precio'];

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'product_id');
    }

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    public function talla()
    {
        return $this->belongsTo(Talla::class, 'talla_id');
    }

    public function imagen()
    {
        return $this->belongsTo(Imagen::class, 'imagen_id');
    }
}
