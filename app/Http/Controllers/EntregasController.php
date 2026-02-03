<?php

namespace App\Http\Controllers;

use App\Services\EntregasService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class EntregasController extends Controller {

    public function __construct(

        protected EntregasService $entregasService
    ){}



    public function index( ) {


            $entregas = $this->entregasService->getAllEntregas();
            return Inertia::render('entregas', [
                'entregas' => $entregas,
            ]);

    }



    public function store(Request $request) {

        $data = $request->validate([
            'codigo' => 'required|unique:entregas,codigo',
            'cliente' => 'required|string',
            'endereco' => 'required|string',
            'previsao' => 'required|date',
            'status' => 'required|string',
        ],
            [
                'required' => 'Este campo e obrigatorio',

                'codigo.unique' => 'Esse codigo ja esta vinculado a outra entrega'
            ]



        );

        $this->entregasService->criarEntrega($data);

        return redirect()->back();
    }

    public function emRotaUpdate(Request $request) {

        $data = $request->validate([

            'codigo' => 'required',
            'entregador' => 'required',
            'status' => 'required|string',

        ],
        [
            'required' => 'Este campo e obrigatorio',
        ]);

      return  $this->entregasService->updateStatusEmRota($data);

    }

    public function cancelar(Request $request) {

        $data = $request->validate([

            'codigo' => 'required',
            'status' => 'required|string',
            'motivo' => 'required|string',
        ],
        [
            'required' => 'Este campo e obrigatorio',
        ]);

        $this->entregasService->updateStatusCancelado($data);
    }

    public function finalizar(Request $request) {

        $data = $request->validate([

            'codigo' => 'required',
            'status' => 'required|string',
        ],
            [
                'required' => 'Este campo e obrigatorio',
            ]);

        if ($data['status'] != 'Rota'){

            return redirect()->back()->withErrors(['status' => 'Entrega nao esta em Rota']);

        }

        $this->entregasService->updateStatusFinalizado($data);

    }

    public function editar(Request $request) {

        $data = $request->validate([
            'id' => 'required',
            'codigo' => ['required', Rule::unique('entregas', 'codigo')->ignore($request->id)],
            'cliente' => 'required|string',
            'entregador' => 'string|nullable',
            'previsao' => 'required|date',
            'endereco' => 'required|string',

        ],

            [
                'required' => 'Este campo e obrigatorio',

                'codigo.unique' => 'Esse codigo ja esta vinculado a outra entrega'
            ]

        );

        $this->entregasService->editarEntrega($data);

        return redirect()->back();

    }


}
