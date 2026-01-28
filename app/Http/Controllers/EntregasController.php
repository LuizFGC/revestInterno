<?php

namespace App\Http\Controllers;

use App\Models\Entregas;
use App\Services\EntregasService;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EntregasController extends Controller {

    public function __construct(

        protected EntregasService $entregasService
    ){}



    public function index(Request $request) {
            $entregas = $this->entregasService->getAllEntregas();

            return Inertia::render('Entregas/Entregas', [
                'entregas' => $entregas,
            ]);

    }


}
