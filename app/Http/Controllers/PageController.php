<?php

namespace App\Http\Controllers;

use App\Models\Info;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function lead(Request $request)
    {
        $info = new Info();

        $info->dpt = $request->dpt;
        $info->nom = $request->nom;
        $info->prenom = $request->prenom;
        $info->mobile = $request->mobile;
        $info->habitation = $request->habitation;
        $info->urgence = $request->urgence;
        $info->foyer = $request->foyer;
        $info->superficie = $request->superficie;

        $info->save();

        return 1;
    }

    public function remerciement()
    {
        return view('remerciement');
    }
}
