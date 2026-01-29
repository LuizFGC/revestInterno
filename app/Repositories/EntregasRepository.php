<?php

namespace App\Repositories;

use App\Models\Entregas;
use Illuminate\Database\Eloquent\Collection;

class EntregasRepository
{
    protected Entregas $model;

    public function __construct(Entregas $model)
    {
        $this->model = $model;
    }

    // Retorna todas as entregas
    public function all(): Collection
    {
        return $this->model->all();
    }

    //Retorna as 5 entregas

    public function lastEntregas()
    {

        return $this->model->latest()->take(5)->get();
    }

    //Count do Status para o dashboard

    public function resumoStatus()
    {

        return [

            'total' => $this->model->count(),

            'status' => $this->model
                ->select('status')
                ->selectRaw('COUNT(*) as total')
                ->groupBy('status')
                ->get()

        ];

    }

    // Cria uma entrega
    public function inserirEntrega(array $data): Entregas
    {
        return $this->model->create($data);
    }
}
