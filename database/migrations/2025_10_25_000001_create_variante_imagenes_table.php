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
        Schema::create('variante_imagenes', function (Blueprint $table) {
            $table->foreignId('variante_id')->constrained('producto_variantes');
            $table->foreignId('imagen_id')->constrained('imagenes');
            $table->integer('orden')->default(0);
            $table->primary(['variante_id', 'imagen_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('variante_imagenes');
    }
};
