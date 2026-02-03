<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EntregasController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('auth/login', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::post('/login-interno', [LoginController::class, 'index'])
    ->name('login-interno');


Route::middleware(['auth'])->group(function () {

    Route::patch('settings/update-profile', [ProfileController::class, 'update'])
        ->name('settings.update-profile');

    Route::patch('settings/update-password', [PasswordController::class, 'update'])
        ->name('settings.update-password');

    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    Route::get('/entregas', [EntregasController::class, 'index'])
        ->name('entregas');

    Route::post('/entregas/store', [EntregasController::class, 'store'])
        ->name('criar-entrega');


    Route::patch('/entregas/rota', [EntregasController::class, 'emRotaUpdate'])
        ->name('colocar-emRota');

    Route::patch('/entregas/cancelar', [EntregasController::class, 'cancelar'])
        ->name('cancelar-entrega');

    Route::patch('/entregas/finalizar', [EntregasController::class, 'finalizar'])
        ->name('finalizar-entrega');

    Route::patch('/entregas/update', [EntregasController::class, 'editar'])
        ->name('editar-entrega');

    Route::get('/relatorios', function () {
        return Inertia::render('EmDesenvolvimento');
    })->name('relatorios');
});

require __DIR__.'/settings.php';
