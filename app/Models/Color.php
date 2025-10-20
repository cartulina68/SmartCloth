<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Color extends Model
{
    use HasFactory;

    protected $fillable = ['color', 'hex'];

    public function variantes()
    {
        return $this->hasMany(ProductoVariante::class, 'color_id');
    }
}
