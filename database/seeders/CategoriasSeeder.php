<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriasSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categorias')->insert([
            ['nombre' => 'Camisas', 'descripcion' => 'Camisas de vestir y casuales', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Pantalones', 'descripcion' => 'Pantalones de vestir, jeans, etc.', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Accesorios', 'descripcion' => 'Cinturones, gorros, bufandas, etc.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
