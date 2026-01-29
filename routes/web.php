<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EntregasController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('auth/login', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/entregas', [EntregasController::class, 'index'])
    ->name('entregas');

Route::post('/entregas', [EntregasController::class, 'store'])
    ->name('criar-entrega');

Route::get('/relatorios', function () {
    return Inertia::render('relatorios');
})->name('relatorios');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
});

require __DIR__.'/settings.php';
