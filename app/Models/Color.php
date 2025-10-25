<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Color extends Model
{
    use HasFactory;

    protected $table = 'colores'; // 👈 le decimos que use esta tabla

        // 👇 Debe coincidir con los nombres de la migración (antes era color y hex)
    protected $fillable = ['nombre', 'codigo_hex'];

    public function variantes()
    {
        return $this->hasMany(ProductoVariante::class, 'color_id');
    }
}
