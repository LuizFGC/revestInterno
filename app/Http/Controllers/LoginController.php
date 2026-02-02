<?php

namespace App\Http\Controllers;

use App\Services\LoginService;
use Illuminate\Http\Request;

class LoginController extends Controller{

    public function __construct(

        protected LoginService $loginService
    ){}



    public function Index(Request $request) {

        $data = $request->validate([

            'user' => 'required|string',
            'password' => 'required|string'

        ]);



        if ( $this->loginService->Auth($data)){
            $request->session()->regenerate();

            return redirect()->route('dashboard');
        }
        return back()->withErrors([
            'user' => 'Credenciais inválidas.',
        ]);
    }

}
