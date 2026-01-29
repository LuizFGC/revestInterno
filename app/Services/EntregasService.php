<?php

namespace App\Services;

use App\Repositories\EntregasRepository;

class EntregasService {

    public function __construct(

        protected EntregasRepository $entregasRepository
    ){}

    public function getAllEntregas(){
       return $this->entregasRepository->all();
    }

    public function criarEntrega($entrega){
        return $this->entregasRepository->inserirEntrega($entrega);
    }

}
