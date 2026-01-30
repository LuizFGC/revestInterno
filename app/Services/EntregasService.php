<?php

namespace App\Services;

use App\Repositories\EntregasRepository;
use Carbon\Carbon;
class EntregasService {

    public function __construct(

        protected EntregasRepository $entregasRepository
    ){}

    public function getAllEntregas(){
       return $this->entregasRepository->all();
    }

    public function criarEntrega($entrega){

        $entrega['previsao'] = Carbon::parse($entrega['previsao'])
            ->setTimezone('America/Sao_Paulo')
            ->format('Y-m-d H:i:s');;



        return $this->entregasRepository->inserirEntrega($entrega);
    }

}
