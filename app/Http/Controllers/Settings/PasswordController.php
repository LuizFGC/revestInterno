<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class PasswordController extends Controller
{
    /**
     * Show the user's password settings page.
     */
    public function edit(): Response
    {
        return Inertia::render('settings/password');
    }

    /**
     * Update the user's password.
     */
    public function update(Request $request)
    {

        $data = $request->validate([

            'currentPassword' => ['required', 'string', 'max:255'],
            'newPassword' => ['required', 'string', 'max:255'],
            'confirmPassword' => ['required', 'string', 'max:255'],

        ], [
                'required' => 'Alguns campos obrigatorios nao foram preenchidos!',

            ]

        );

        if (!Hash::check($data['currentPassword'], auth()->user()->password)) {
            return back()->withErrors([
                'currentPassword' => 'Senha atual incorreta',
            ]);
        }

        if ($data['newPassword'] !== $data['confirmPassword']) {

            return back()->withErrors([
                'confirmPassword' => 'As senhas estao diferentes',
            ]);
        }

        auth()->user()->update([
            'password' => Hash::make($data['newPassword']),
        ]);
    }
}
