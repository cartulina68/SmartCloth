<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsVariantesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products_variantes')->insert([
            [
                'product_id' => 1,
                'color_id' => 1, // Blanco
                'talla_id' => 2, // M
                'imagen_id' => 1,
                'stock' => 50,
                'precio' => 49.90,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'product_id' => 2,
                'color_id' => 2, // Azul
                'talla_id' => 3, // L
                'imagen_id' => 2,
                'stock' => 30,
                'precio' => 129.90,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
