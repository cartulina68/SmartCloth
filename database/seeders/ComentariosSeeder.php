<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ComentariosSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('comentarios')->insert([
            [
                'usuario_id' => 1,
                'producto_id' => 1,
                'contenido' => 'Excelente calidad del producto.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario_id' => 1,
                'producto_id' => 2,
                'contenido' => 'Muy buen servicio y envío rápido.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
