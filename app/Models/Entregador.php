<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entregador extends Model
{
    protected $table = 'entregador';

    protected $primaryKey = 'id';

    protected $fillable = [

        'nome',
        'cpf',
    ];
}
