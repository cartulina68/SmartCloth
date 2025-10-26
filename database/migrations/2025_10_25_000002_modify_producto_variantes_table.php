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
        Schema::table('producto_variantes', function (Blueprint $table) {
            // Eliminar la columna imagen_id
            $table->dropForeign(['imagen_id']);
            $table->dropColumn('imagen_id');

            // Hacer precio requerido
            $table->decimal('precio', 10, 2)->nullable(false)->change();

            // Añadir índice único para evitar duplicados
            $table->unique(['producto_id', 'color_id', 'talla_id'], 'unique_product_variant');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('producto_variantes', function (Blueprint $table) {
            $table->dropUnique('unique_product_variant');
            $table->decimal('precio', 10, 2)->nullable()->change();
            $table->foreignId('imagen_id')->nullable()->constrained('imagenes');
        });
    }
};
