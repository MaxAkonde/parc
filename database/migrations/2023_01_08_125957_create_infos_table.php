<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infos', function (Blueprint $table) {
            $table->id();
            $table->string("dtp")->nullable();
            $table->string("nom")->nullable();
            $table->string("prenom")->nullable();
            $table->string("tel")->nullable();
            $table->string("mobile")->nullable();
            $table->string("habitation")->nullable();
            $table->string("urgence")->nullable();
            $table->string("foyer")->nullable();
            $table->string("superficie")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infos');
    }
};
