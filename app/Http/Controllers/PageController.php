<?php

namespace App\Http\Controllers;

use App\Models\Info;
use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

    public function mentionslegales()
    {
        return view('mentionslegales');
    }

    public function nouscontacter()
    {
        return view('nouscontacter');
    }

    public function contact(Request $request)
    {
        Mail::to('techs.fr007@gmail.com')
            ->queue(new Contact($request->except('_token')));
            
        return 1;
    }
}
