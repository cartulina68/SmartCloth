<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductosSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'nombre' => 'Polo básico',
                'descripcion' => 'Polo de algodón 100% cómodo y transpirable',
                'precio' => 49.90,
                'categoria_id' => 1, // Polos
                'genero_id' => 1, // Hombre
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Pantalón jeans slim fit',
                'descripcion' => 'Jean azul oscuro con diseño moderno',
                'precio' => 129.90,
                'categoria_id' => 2, // Pantalones
                'genero_id' => 2, // Mujer
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
