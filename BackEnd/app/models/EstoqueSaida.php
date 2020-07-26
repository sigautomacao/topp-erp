<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EstoqueSaida extends Model
{
   protected $table = "estoque_saida";

   protected $fillable = [
      'venda_id', 'produto_id', 'valor_unitario', 'quantidade', 'nota',
   ];
}
