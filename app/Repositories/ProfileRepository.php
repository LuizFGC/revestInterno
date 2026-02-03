<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

Class ProfileRepository {


    protected User $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }
    public function Update($dados){

        $user = Auth::user();

        $user->update([
            'name' => $dados['name'],
            'cargo' => $dados['cargo'],
            'user' => $dados['user'],
            'telefone' => $dados['telefone'],
        ]);

        return back();




    }


}
