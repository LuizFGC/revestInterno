<?php

namespace App\Services;

use App\Repositories\ProfileRepository;


class ProfileService{

    public function __construct(

        protected ProfileRepository $profileRepository

    ){}

    public function updateUser($request){

        return $this->profileRepository->Update($request);
    }

}
