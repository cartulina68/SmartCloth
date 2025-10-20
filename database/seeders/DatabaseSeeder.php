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

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear usuario de prueba
        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Ejecutar los demás seeders
        $this->call([
            RolesSeeder::class,
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
