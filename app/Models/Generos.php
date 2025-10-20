<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Genero extends Model
{
    use HasFactory;

    protected $fillable = ['genero'];

    public function productos()
    {
        return $this->hasMany(Producto::class, 'genero_id');
    }
}
