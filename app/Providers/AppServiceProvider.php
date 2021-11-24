<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Blade::if('devserver', function () {
            if( app()->environment('production')){
                return false;
            }
            try {
                \Http::get('http://localhost:3000');
                return true;
            } catch (\Throwable $th) {
                return false;
            }
        });
    }
}
