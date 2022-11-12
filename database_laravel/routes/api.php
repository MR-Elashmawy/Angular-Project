<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuCategoryController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Hash;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('orders', OrderController::class); // order api
Route::get('orders-user/{id}',[OrderController::class,'userOrders']); //get user orders
Route::get('users', [UserController::class, 'index']); // get users api
Route::get('users/{id}', [UserController::class, 'show']); // get users api
Route::put('users/{id}', [UserController::class, 'update']); // get users api
Route::post('users', [UserController::class, 'store']); // register new user api
Route::resource('categories', CategoryController::class); // categories api
Route::resource('menu-categories', MenuCategoryController::class); // menu categories api
Route::resource('products', ProductController::class); // products api
Route::get('filter-categories/{id}', [CategoryController::class, 'getCategoryFilter']); // get filter categories api
Route::get('filter-products/{id}', [ProductController::class, 'getProductFilter']); // get filter products api
