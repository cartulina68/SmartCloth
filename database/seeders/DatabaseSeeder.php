<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use Database\Seeders\RolesSeeder;
use Database\Seeders\GenerosSeeder;
use Database\Seeders\ColoresSeeder;
use Database\Seeders\TallasSeeder;
use Database\Seeders\CategoriasSeeder;
use Database\Seeders\ProductosSeeder;
use Database\Seeders\ImagenesSeeder;
use Database\Seeders\ProductsVariantesSeeder;
use Database\Seeders\UsersSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Ejecutar los demás seeders (create roles before users so assignments work)
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
            GenerosSeeder::class,
            ColoresSeeder::class,
            TallasSeeder::class,
            CategoriasSeeder::class,
            ProductosSeeder::class,
            ImagenesSeeder::class,
            ProductsVariantesSeeder::class,
            ComentariosSeeder::class,
            ValoracionesSeeder::class,
        ]);
    }
}
