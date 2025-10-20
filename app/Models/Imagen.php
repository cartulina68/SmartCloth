<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Imagen extends Model
{
    use HasFactory;

    protected $fillable = ['path'];

    public function variantes()
    {
        return $this->hasMany(ProductoVariante::class, 'imagen_id');
    }
}
