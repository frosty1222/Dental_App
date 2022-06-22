<?php

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
Auth::routes();
// Route::view('/{path?}', 'app');
// Route::get('{all?}', [App\Http\Controllers\HomeController::class,'_invoke'])->where('path', '[a-zA-Z0-9-/]+');
Route::get('/{path?}/{id?}', function () {
    return view('welcome');
})->where('path', '^((?!api).)*$');

// Route::get('/{path?}/{id?}', function () {
//     return view('admin');
// })->where('path', '^((?!api).)*$');
