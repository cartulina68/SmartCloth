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
        Schema::create('products_variantes', function (Blueprint $table) {
            $table->id();

            // 🔗 Relaciones
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('color_id')->nullable()->constrained('colores')->onDelete('set null');
            $table->foreignId('talla_id')->nullable()->constrained('tallas')->onDelete('set null');
            $table->foreignId('imagen_id')->nullable()->constrained('imagenes')->onDelete('set null');

            // 📦 Datos del inventario
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
        Schema::dropIfExists('products_variantes');
    }
};
