<?php

namespace App\Enums;

enum Role: string
{
    case ADMIN = 'administrador';
    case SALEMAN = 'vendedor';
    case CLIENT = 'cliente';
}
