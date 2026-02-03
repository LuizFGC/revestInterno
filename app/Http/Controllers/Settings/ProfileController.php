<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Services\ProfileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{


    public function __construct(

        protected ProfileService $profileService
    ){}

    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        $user = Auth::user();
        return Inertia::render('settings/profile', [
                'user' => $user,
        ]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(Request $request)
    {

        $data = $request->validate([

            'name' => ['required', 'string', 'max:255'],
            'user' => ['required', 'string', 'max:255'],
            'telefone' => ['string'],
            'cargo' => ['string'],

        ], [
            'required' => 'Este campo es obrigatorio.',

            ]

        );


        $this->profileService->updateUser($data);

        return to_route('profile.edit');
    }


}
