<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear usuario admin
        $userAdmin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'phone' => '1234567890',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );
        $userAdmin->assignRole(Role::ADMIN);

        $roles = [Role::CLIENT, Role::SALEMAN];

        // Crear usuarios aleatorios y asignar un rol random
        User::factory()->count(5)->create()->each(function ($user) use ($roles) {
            $user->assignRole(Arr::random($roles));
        });
    }
}
