<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/booking', function () {
    return Inertia::render('booking'); // nama file booking.tsx di folder resources/js/Pages/
    })->name('booking');

    Route::get('/done-login', function () {
    return Inertia::render('done-login'); // nama file booking.tsx di folder resources/js/Pages/
    })->name('done-login');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
