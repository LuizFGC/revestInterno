<?php

namespace App\Services;

use App\Repositories\EntregasRepository;
use Carbon\Carbon;

class DashboardService {

    public function __construct(

        protected EntregasRepository $entregasRepository
    ){}

    public function getLastEntregas() {



        return $this->entregasRepository->all();
    }


}
