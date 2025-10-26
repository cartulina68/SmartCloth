<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('producto_variantes', function (Blueprint $table) {
            $table->id();

            // Relaciones
            $table->foreignId('producto_id')->constrained('productos');
            $table->foreignId('color_id')->nullable()->constrained('colores');
            $table->foreignId('talla_id')->nullable()->constrained('tallas');
            $table->foreignId('imagen_id')->nullable()->constrained('imagenes');

            // Datos del inventario
            $table->integer('stock')->default(0);
            $table->decimal('precio', 10, 2)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producto_variantes');
    }
};
