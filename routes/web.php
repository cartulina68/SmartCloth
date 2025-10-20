<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\{
    RoleController,
    CategoriaController,
    GeneroController,
    ColorController,
    TallaController,
    ImagenController,
    UserController,
    ProductoController,
    ValoracionController,
    ComentarioController,
    ProductoVarianteController
};

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('roles', RoleController::class);
    Route::resource('categorias', CategoriaController::class);
    Route::resource('generos', GeneroController::class);
    Route::resource('colores', ColorController::class);
    Route::resource('tallas', TallaController::class);
    Route::resource('imagenes', ImagenController::class);
    Route::resource('users', UserController::class);
    Route::resource('productos', ProductoController::class);
    Route::resource('valoraciones', ValoracionController::class);
    Route::resource('comentarios', ComentarioController::class);
    Route::resource('productos-variantes', ProductoVarianteController::class);

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
