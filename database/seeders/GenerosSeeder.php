<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenerosSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('generos')->insert([
            ['genero' => 'Masculino', 'created_at' => now(), 'updated_at' => now()],
            ['genero' => 'Femenino', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }
}

