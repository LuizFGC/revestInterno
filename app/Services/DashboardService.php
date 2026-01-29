<?php

namespace App\Services;

use App\Repositories\EntregasRepository;

class DashboardService {

    public function __construct(

        protected EntregasRepository $entregasRepository
    ){}

    public function getLastEntregas() {
        return $this->entregasRepository->lastEntregas();
    }

    public function getCardValues() {

        return json_encode($this->entregasRepository->resumoStatus()) ;

    }

}
