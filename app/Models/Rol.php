<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['rol'];

    public function users()
    {
        return $this->hasMany(User::class, 'rol_id');
    }
}
