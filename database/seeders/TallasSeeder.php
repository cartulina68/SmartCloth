<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TallasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tallas')->insert([
            [
                'key' => 'S',
                'nombre' => 'Pequeña',
                'orden' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'M',
                'nombre' => 'Mediana',
                'orden' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'L',
                'nombre' => 'Grande',
                'orden' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'key' => 'XL',
                'nombre' => 'Extra Grande',
                'orden' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
