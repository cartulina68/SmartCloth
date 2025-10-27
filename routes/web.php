<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\{
    CategoriaController,
    ColorController,
    TallaController,
    ProductoController,
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

    // Productos CRUD
    Route::get('productos', [ProductoController::class, 'index'])->name('productos.index');
    Route::get('productos/crear', [ProductoController::class, 'create'])->name('productos.create');
    Route::post('productos', [ProductoController::class, 'store'])->name('productos.store');
    Route::get('productos/{producto}/editar', [ProductoController::class, 'show'])->name('productos.show');
    Route::post('productos/{producto}', [ProductoController::class, 'update'])->name('productos.update');
    Route::delete('productos/{producto}', [ProductoController::class, 'destroy'])->name('productos.destroy');

    // Tallas CRUD
    Route::resource('tallas', TallaController::class);
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
