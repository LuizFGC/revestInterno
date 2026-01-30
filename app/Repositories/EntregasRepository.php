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
        $totaisPorStatus = $this->model
            ->select('status')
            ->selectRaw('COUNT(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status');

        return [
            'total' => $this->model->count(),
            'status' => $totaisPorStatus,
        ];


    }

    // Cria uma entrega
    public function inserirEntrega(array $data): Entregas
    {
        return $this->model->create($data);
    }

    //Atera de pendente para em Rota
    public function colocarEmRota(array $data)
    {

        $entrega = Entregas::find($data['codigo']);

        if ( !$entrega) {

            return redirect()->back()->withErrors([
                'codigo' => 'Entrega não encontrada.',
            ]);

        } else {

          $entrega->update([
                'status' => $data['status'],
                'entregador' => $data['entregador'],
            ]);

          return back();

        };


    }

    public function cancelarEntrega(array $data){

        $entrega = Entregas::find($data['codigo']);

        if ( !$entrega) {

            return redirect()->back()->withErrors([
                'codigo' => 'Entrega não encontrada.',
            ]);

        } else {

            $entrega->update([
                'status' => $data['status'],
                'motivo' => $data['motivo'],
            ]);

            return back();

        };
    }

    public function finalizarEntrega(array $data){
        $entrega = Entregas::find($data['codigo']);

        if ( !$entrega) {

            return redirect()->back()->withErrors([
                'codigo' => 'Entrega não encontrada.',
            ]);

        } else {

            $entrega->update([
                'status' => $data['status'],
            ]);

            return back();

        };

    }
}
