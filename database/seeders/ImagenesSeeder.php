<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImagenesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('imagenes')->insert([
            [
                'path' => 'images/polo_basico.jpg',
                'descripcion' => 'Polo básico color blanco',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'path' => 'images/jean_slimfit.jpg',
                'descripcion' => 'Pantalón jeans slim fit azul',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
