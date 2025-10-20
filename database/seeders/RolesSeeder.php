<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RolesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('roles')->insert([
            ['rol' => 'Administrador', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['rol' => 'Vendedor', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['rol' => 'Cliente', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
