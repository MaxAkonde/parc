<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('effy');
})->name('index');

Route::post('/lead', [PageController::class, 'lead'])->name('lead');

//Route::get('/mentionslegales', [PageController::class, 'mentionslegales'])->name('mentionslegales');

//Route::get('/nouscontacter', [PageController::class, 'nouscontacter'])->name('nouscontacter');
//Route::post('/contact', [PageController::class, 'contact'])->name('contact');

Route::get('/remerciement', [PageController::class, 'remerciement'])->name('remerciement');

Auth::routes();

Route::get('register', function() {
    return "Access Denied";
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
