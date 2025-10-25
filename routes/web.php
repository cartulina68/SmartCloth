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

// Página de login al inicio
Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

// Rutas protegidas por auth
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Página Inertia React
    // Route::get('categorias', function () {
    //     return Inertia::render('categorias/index');
    // })->name('categorias.index');

    // Categorias CRUD
    Route::get('categorias', [CategoriaController::class, 'index'])->name('categorias.index');
    Route::post('categorias', [CategoriaController::class, 'store'])->name('categorias.store');
    Route::get('categorias/{categoria}', [CategoriaController::class, 'show'])->name('categorias.show');
    Route::put('categorias/{categoria}', [CategoriaController::class, 'update'])->name('categorias.update');
    Route::delete('categorias/{categoria}', [CategoriaController::class, 'destroy'])->name('categorias.destroy');

    // Colores CRUD
    Route::get('colores', [ColorController::class, 'index'])->name('colores.index');
    Route::post('colores', [ColorController::class, 'store'])->name('colores.store');
    Route::get('colores/{color}', [ColorController::class, 'show'])->name('colores.show');
    Route::put('colores/{color}', [ColorController::class, 'update'])->name('colores.update');
    Route::delete('colores/{color}', [ColorController::class, 'destroy'])->name('colores.destroy');


    // Otros CRUDs
    Route::resource('roles', RoleController::class);
    Route::resource('generos', GeneroController::class);
    // Route::resource('colores', ColorController::class);
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
