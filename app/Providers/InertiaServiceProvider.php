<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {

        Inertia::share([
            'auth' => fn () => [
                'user' => auth()->user(),
                'role' => auth()->user()?->role,
            ],
        ]);


    }
}
