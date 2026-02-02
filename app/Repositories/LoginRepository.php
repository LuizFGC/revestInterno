<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

Class LoginRepository {


    protected User $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }
    public function Logar($dados){


        return Auth::attempt([
            'user' => $dados['user'],
            'password' => $dados['password']
        ]);


    }


}
