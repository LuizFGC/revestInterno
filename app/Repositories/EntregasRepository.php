<?php

namespace App\Repositories;

use App\Models\Entregas;
use Illuminate\Database\Eloquent\Collection;
class EntregasRepository  {

    protected $model;
    public function __construct(Entregas $entregas) {
        $this->model = $entregas;

    }

    //Retorna todas as entregas
    public function all()
    {
        return $this->model->all();
    }

    public function create (Entregas $entregas){


    }



}
