<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ValoracionesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('valoraciones')->insert([
            [
                'usuario_id' => 1,
                'producto_id' => 1,
                'puntuacion' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario_id' => 1,
                'producto_id' => 2,
                'puntuacion' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
