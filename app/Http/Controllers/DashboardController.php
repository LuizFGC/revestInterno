<?php

namespace App\Http\Controllers;

use App\Services\DashboardService;
use Carbon\Carbon;


use Illuminate\Http\Request;
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


        return Inertia::render('dashboard', [

            'entregas' => $entregas,



        ]);
    }


}
