<?php

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the admin routes that are handled
| by your application. These will be protected by the `auth` middleware.
|
*/

// Redirect default admin to confessions dashboard.
Route::get('/', function () {
    return redirect('admin/confessions');
});

Route::get('api-keys', 'ApiKeysAdminController@getIndex');
Route::get('api-keys/add', 'ApiKeysAdminController@getAdd');
Route::get('api-keys/delete/{id}', 'ApiKeysAdminController@getDelete');

Route::get('settings', 'SettingsAdminController@getIndex');
Route::post('settings', 'SettingsAdminController@postIndex');

Route::get('users', 'UsersAdminController@getIndex');
Route::get('users/add', 'UsersAdminController@getAdd');
Route::post('users/add', 'UsersAdminController@postAdd');
Route::get('users/edit/{id}', 'UsersAdminController@getEdit');
Route::post('users/edit/{id}', 'UsersAdminController@postEdit');
Route::get('users/delete/{id}', 'UsersAdminController@getDelete');

Route::get('profile', 'ProfileController@getIndex');
Route::post('profile/edit', 'ProfileController@postEdit');
Route::get('profile/connect/{provider}', 'ProfileController@getConnect');
Route::get('profile/delete/{provider}', 'ProfileController@getDelete');

Route::get('confessions/comments/delete/{id}', 'ModeratorCommentsAdminController@getDelete');

Route::get('confessions', 'ConfessionsAdminController@getIndex');
Route::get('confessions/index/{status?}', 'ConfessionsAdminController@getIndex');
Route::get('confessions/edit/{id}', 'ConfessionsAdminController@getEdit');
Route::post('confessions/edit/{id}', 'ConfessionsAdminController@postEdit');
Route::get('confessions/approve/{id}/{hours?}', 'ConfessionsAdminController@getApprove');
Route::get('confessions/feature/{id}/{hours?}', 'ConfessionsAdminController@getFeature');
Route::get('confessions/unfeature/{id}', 'ConfessionsAdminController@getUnfeature');
Route::get('confessions/reject/{id}', 'ConfessionsAdminController@getReject');
Route::get('confessions/delete/{id}', 'ConfessionsAdminController@getDelete');
