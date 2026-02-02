<?php

namespace App\Services;

use App\Repositories\LoginRepository;


class LoginService{

    public function __construct(

        protected LoginRepository $loginRepository

    ){}

    public function Auth($request){

       return $this->loginRepository->Logar($request);
    }

}
