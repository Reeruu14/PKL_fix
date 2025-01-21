<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

abstract class homeController
{
    public function index()
    {
        return Inertia::render('home', [1]);
    }
}
