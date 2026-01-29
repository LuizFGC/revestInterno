<?php

namespace App\Http\Controllers;

use App\Services\EntregasService;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EntregasController extends Controller {

    public function __construct(

        protected EntregasService $entregasService
    ){}



    public function index() {
            $entregas = $this->entregasService->getAllEntregas();

            return Inertia::render('entregas', [
                'entregas' => $entregas,
            ]);

    }

    public function store(Request $request) {

        return $this->entregasService->criarEntrega($request);
    }


}
