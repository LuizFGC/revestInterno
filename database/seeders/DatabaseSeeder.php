<?php

namespace Database\Seeders;

use App\Models\Entregas;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            'name' => 'Luiz Filipe',
            'user' => 'lfcandido',
            'cargo' => 'Auxiliar Administrativo',
            'telefone' => '34 9 9833-1203',
            'password' => Hash::make('123456'),
        ]);

    }
}
