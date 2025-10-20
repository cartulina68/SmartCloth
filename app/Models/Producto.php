<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'descripcion', 'precio', 'categoria_id', 'genero_id'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    public function genero()
    {
        return $this->belongsTo(Genero::class, 'genero_id');
    }

    public function variantes()
    {
        return $this->hasMany(ProductoVariante::class, 'product_id');
    }

    public function comentarios()
    {
        return $this->hasMany(Comentario::class, 'producto_id');
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class, 'producto_id');
    }
}
