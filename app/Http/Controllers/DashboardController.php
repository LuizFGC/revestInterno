<?php

namespace App\Http\Controllers;

use App\Services\DashboardService;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function __construct(

        protected DashboardService $dashboardService
    )
    {}

    public function index()
    {

        $entregas = $this->dashboardService->getLastEntregas();

        $cardValues = json_decode($this->dashboardService->getCardValues());

        return Inertia::render('dashboard', [

            'entregas' => $entregas,

            'cardValues' => $cardValues,

        ]);
    }


}
