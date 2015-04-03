<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function() {
    return File::get(public_path() . '/index.html');
});

// API Routes
Route::group(array('prefix' => 'api'), function() {
    Route::get('confessions/popular', 'ConfessionsController@popular');
    Route::get('confessions/recent', 'ConfessionsController@recent');
    Route::get('confessions/category/{category_id}', 'ConfessionsController@category');
    Route::get('confessions/tag/{tag}', 'ConfessionsController@tag');
	Route::resource('confessions', 'ConfessionsController',
		['only' => ['index', 'store', 'show']]);

	Route::resource('categories', 'CategoriesController',
		['only' => ['index', 'show']]);

    Route::get('tags/top/{num}', 'TagsController@topNTags');
    Route::resource('tags', 'TagsController',
        ['only' => ['index', 'show']]);

    Route::controllers([
        'fbuser' => 'FbUsersController',
    ]);
});

// Auth Routes
Route::controllers([
	'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

// Admin Routes
Route::controllers([
    'admin/confessions' => 'Admin\ConfessionsAdminController',
    'admin/users' => 'Admin\UsersAdminController',
]);

// Temporarily redirect default admin to confessions dashboard
Route::get('/admin', function() {
    return redirect('admin/confessions');
});
