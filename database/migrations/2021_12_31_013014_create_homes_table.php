<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('bgImg');
            $table->enum('bgColor',['primary','secondary','success','danger','warning','info','light','dark','black']);
            $table->enum('bgOpacity',['0','25','50','75','100']);
            $table->text('name');
            $table->text('focusTitle');
            $table->text('shortDescription');
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
        Schema::dropIfExists('homes');
    }
}
