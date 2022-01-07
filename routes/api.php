<?php

use App\Http\Controllers\HomeController;
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

Route::get('homesData',[HomeController::class, 'homesData']);
Route::get('homeData',[HomeController::class, 'homeData']);
Route::get('editHomeData{id}',[HomeController::class, 'editData']);
Route::get('editHome{id}',[HomeController::class, 'edit']);

Route::post('adHome',[HomeController::class, 'add']);
