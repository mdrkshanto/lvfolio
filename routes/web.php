<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/' , [HomeController::class,'index']);
Route::get('/about' , [AboutController::class,'index']);
Route::get('/resume' , [ResumeController::class,'index']);
Route::get('/skills' , [SkillController::class,'index']);
Route::get('/contact' , [ContactController::class,'index']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
