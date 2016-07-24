<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

/**
 * Abstract class for all admin controllers.
 */
abstract class AdminController extends Controller {

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    protected function flashMessage($message, $class = 'alert-success')
    {
        \Session::flash('message', $message);
        \Session::flash('alert-class', $class);
    }

}
