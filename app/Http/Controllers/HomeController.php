<?php

namespace App\Http\Controllers;

use App\Models\Info;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $infos = Info::latest()->get();
        //dd($infos);
        return view('home', [
            'infos' => $infos,
        ]);
    }
}
