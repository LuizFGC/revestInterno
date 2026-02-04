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



    // Cria uma entrega
    public function inserirEntrega(array $data): Entregas
    {
        return $this->model->create($data);
    }

    //Atera de pendente para em Rota
    public function colocarEmRota(array $data)
    {

        $entrega = Entregas::firstWhere('codigo', $data['codigo']);

        if ( !$entrega) {

            return redirect()->back()->withErrors([
                'codigo' => 'Entrega não encontrada.',
            ]);

        } elseif ($entrega['status'] != 'Pendente') {
            return redirect()->back()->withErrors([
                'status' => 'Entrega nao esta Pendente'

            ]);
        }
        else {

          $entrega->update([
                'status' => $data['status'],
                'entregador' => $data['entregador'],
            ]);

          return back();

        };


    }

    public function cancelarEntrega(array $data){

        $entrega = Entregas::firstWhere('codigo', $data['codigo']);

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

        $entrega = Entregas::firstWhere('codigo', $data['codigo']);

        if ($entrega['status'] != 'Rota'){

            return redirect()->back()->withErrors(['status' => 'Entrega nao esta em Rota']);

        }

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

    public function inserirEdicao(array $data) {

        $entrega = Entregas::firstWhere('codigo', $data['codigo']);

        $entrega->update([
            'codigo' => $data['codigo'],
            'cliente' => $data['cliente'],
            'endereco' => $data['endereco'],
            'previsao' => $data['previsao'],
            'entregador' => $data['entregador'],
        ]);

        return back();

    }
}
