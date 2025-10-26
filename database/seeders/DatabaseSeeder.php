<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\RolesSeeder;
use Database\Seeders\GenerosSeeder;
use Database\Seeders\ColoresSeeder;
use Database\Seeders\TallasSeeder;
use Database\Seeders\CategoriasSeeder;
use Database\Seeders\UsersSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
            GenerosSeeder::class,
            ColoresSeeder::class,
            TallasSeeder::class,
            CategoriasSeeder::class,
        ]);
    }
}
