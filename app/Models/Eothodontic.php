<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eothodontic extends Model
{
    use HasFactory;
    protected $table ='eothodontics';
    protected $fillable = ['name','image','advantage','disadvantage','another'];
}
