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
        //dd($request);
        $info = new Info();

        //$info->dpt = $request->dpt;
        $info->nom = $request->nom;
        $info->prenom = $request->prenom;
        //$info->mobile = $request->mobile;
        $info->mobile = $request->tel;
        $info->habitation = $request->habitation;
        //$info->urgence = $request->urgence;
        $info->urgence = $request->product;
        //$info->foyer = $request->foyer;
        //$info->superficie = $request->superficie;

        $info->logement = $request->logement;
        $info->mode = $request->mode;
        $info->code = $request->code;

        $info->save();

        //return 1;
        return redirect()->route('remerciement');
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
