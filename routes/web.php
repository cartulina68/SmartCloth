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
    Route::get('categorias', function () {
        return Inertia::render('Admin/Categoria/Index');
    })->name('categorias.index');

    // Endpoints API para Axios
    Route::get('api/categorias', [CategoriaController::class, 'index']); // listado
    Route::post('api/categorias', [CategoriaController::class, 'store'])->name('categorias.store'); // crear
    Route::get('api/categorias/{categoria}', [CategoriaController::class, 'show'])->name('categorias.show'); // ver
    Route::put('api/categorias/{categoria}', [CategoriaController::class, 'update'])->name('categorias.update'); // actualizar
    Route::delete('api/categorias/{categoria}', [CategoriaController::class, 'destroy'])->name('categorias.destroy'); // eliminar

    // Otros CRUDs
    Route::resource('roles', RoleController::class);
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
