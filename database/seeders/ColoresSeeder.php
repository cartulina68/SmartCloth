<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColoresSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('colores')->insert([
            ['nombre' => 'Rojo', 'codigo_hex' => '#FF0000', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Azul', 'codigo_hex' => '#0000FF', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Negro', 'codigo_hex' => '#000000', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Blanco', 'codigo_hex' => '#FFFFFF', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}

