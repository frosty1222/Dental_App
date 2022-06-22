<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// react js api call
Route::get('/images',[App\Http\Controllers\GalleryController::class,'index'])->name('images');
Route::post('/upload',[App\Http\Controllers\GalleryController::class,'upload'])->name('upload');
Route::post('/deleteI/{id}',[App\Http\Controllers\GalleryController::class,'delete'])->name('deletei');
Route::post('/editI/{id}',[App\Http\Controllers\GalleryController::class,'edit'])->name('editi');
// service Route
Route::post('/addNewService',[App\Http\Controllers\ServiceController::class,'addNewService'])->name('addNewService');
Route::post('/EditService/{id}',[App\Http\Controllers\ServiceController::class,'EditService'])->name('editsv');
Route::get('/getAll',[App\Http\Controllers\ServiceController::class,'index'])->name('getAll');
Route::get('/getAll2',[App\Http\Controllers\ServiceController::class,'index2'])->name('getAll2');
Route::post('/DeleteS/{id}',[App\Http\Controllers\ServiceController::class,'delete'])->name('deletes');
Route::get('/getIdReactServiceEdit/{id}',[App\Http\Controllers\ServiceController::class,'getIdReactServiceEdit'])->name('getIdReactServiceEdit');
//categoryService
Route::post('/addNewCategory',[App\Http\Controllers\ServiceCategoryController::class,'addNewCategory'])->name('addNewCategory');
Route::post('/EditCategory/{id}',[App\Http\Controllers\ServiceCategoryController::class,'EditCategory'])->name('EditCategory');
Route::get('/getAllCategory',[App\Http\Controllers\ServiceCategoryController::class,'index'])->name('getAllCategory');
Route::get('/getIdReactCategoryEdit/{id}',[App\Http\Controllers\ServiceCategoryController::class,'getIdReactCategoryEdit'])->name('getIdReactCategoryEdit');
Route::post('/deleteCategory/{id}',[App\Http\Controllers\ServiceCategoryController::class,'delete'])->name('deleteCategory');
//contact
Route::get('/getallcontact',[App\Http\Controllers\ContactController::class,'index'])->name('getallcontact');
Route::post('/addcontact',[App\Http\Controllers\ContactController::class,'addContact'])->name('addcontact');
Route::post('/deletecontact/{id}',[App\Http\Controllers\ContactController::class,'delete'])->name('deletecontact');
// discount
Route::post('/discount_add',[App\Http\Controllers\DiscountController::class,'add']);
Route::post('/editdis/{id}',[App\Http\Controllers\DiscountController::class,'editDiscount']);
Route::post('/DeleteDiscount/{id}',[App\Http\Controllers\DiscountController::class,'Delete']);
Route::get('/getIDDiscount/{id}',[App\Http\Controllers\DiscountController::class,'getID']);
Route::get('/GetAllDiscountData',[App\Http\Controllers\DiscountController::class,'index']);

// news
Route::post('/Addnews',[App\Http\Controllers\NewsController::class,'Addnews'])->name('Addnews');
Route::get('/getNews',[App\Http\Controllers\NewsController::class,'index'])->name('getNews');
Route::get('/getNews2',[App\Http\Controllers\NewsController::class,'index2'])->name('getNews2');
Route::post('/DeleteNews/{id}',[App\Http\Controllers\NewsController::class,'DeleteNews'])->name('DeleteNews');
Route::post('/editNews/{id}',[App\Http\Controllers\NewsController::class,'editNews'])->name('editNews');
Route::get('/getIdValue/{id}',[App\Http\Controllers\NewsController::class,'getIdValue'])->name('getIdValue');
// orthodontic Route
Route::post('/oadd',[App\Http\Controllers\EothodonticController::class,'add']);
Route::post('/oedit/{id}',[App\Http\Controllers\EothodonticController::class,'edit']);
Route::post('/odelete/{id}',[App\Http\Controllers\EothodonticController::class,'Delete']);
Route::get('/ogetID/{id}',[App\Http\Controllers\EothodonticController::class,'getID']);
Route::get('/oGetAll',[App\Http\Controllers\EothodonticController::class,'index']);
// customer questions routes
Route::post('/cadd',[App\Http\Controllers\CustomerQuestionController::class,'add']);
Route::post('/cedit/{id}',[App\Http\Controllers\CustomerQuestionController::class,'edit']);
Route::post('/cdelete/{id}',[App\Http\Controllers\CustomerQuestionController::class,'Delete']);
Route::get('/cgetID/{id}',[App\Http\Controllers\CustomerQuestionController::class,'getID']);
Route::get('/cGetAll',[App\Http\Controllers\CustomerQuestionController::class,'index']);
// User Route
Route::post('/Mregister',[App\Http\Controllers\UserController::class,'myRegister']);
Route::post('/Mlogin',[App\Http\Controllers\UserController::class,'myLogin']);
