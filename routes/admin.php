<?php


use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\TaskController;
use App\Http\Controllers\Admin\ExtraController;
use App\Http\Controllers\SeatBookingController;
use App\Http\Controllers\Admin\CurrencyController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\DashboardController;


use App\Http\Controllers\Admin\SocialLinkController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\RolePermissionController;
use App\Http\Controllers\Admin\GeneralSettingsController;

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'loginPost'])->name('login.post');

Route::group(['middleware' => ['auth:admin'], 'as' => 'admin.'], function () {

    Route::group(['prefix' => 'manage', 'as' => 'manage.'], function () {
        Route::group(['prefix' => 'tasks', 'as' => 'tasks.'], function () {
            Route::get('', [TaskController::class, 'index'])->name('index');
        });
    });

    Route::get('/events', [EventController::class, 'index'])->name('events.index');
    Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
    Route::post('/events/store', [EventController::class, 'store'])->name('events.store');
    Route::put('/events/{event}/update', [EventController::class, 'update'])->name('events.update');
    Route::get('/events/{event}/edit', [EventController::class, 'edit'])->name('events.edit');
    Route::get('/events/{event}/details', [EventController::class, 'show'])->name('events.details');
    Route::delete('/events/{event}', [EventController::class, 'destroy'])->name('events.destroy');
    Route::post('/events/{id}/reserve', [SeatBookingController::class, 'reserve'])->name('seats.reserve');

    Route::get('/error', [DashboardController::class, 'error'])->name('error');
    Route::get('dashboard', [DashboardController::class, 'adminDashboard'])->name('dashboard');
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');


    Route::group(['prefix' => 'user'], function () {
        Route::get('/profile', [AdminProfileController::class, 'userProfile'])->name('user.profile');
        Route::post('/profile/update', [AdminProfileController::class, 'userProfileUpdate'])->name('user.profile.update');
        Route::post('/profile/change-password', [AdminProfileController::class, 'userProfileChangePassword'])->name('user.profile.update');
    });

    // General Settings
    Route::group(['prefix' => 'general-settings'], function () {
        Route::get('', [GeneralSettingsController::class, 'GeneralSettings'])->name('general.settings');
        Route::post('/general-settings', [GeneralSettingsController::class, 'updateSettings'])->name('general.settings.update_settings');
        Route::post('/update-email', [GeneralSettingsController::class, 'updateEmail'])->name('general.settings.update_email');
    });

    //size
    Route::group(['prefix' => 'currency'], function () {
        Route::get('', [CurrencyController::class, 'index'])->name('currency');
        Route::get('data', [CurrencyController::class, 'data'])->name('currency.data');
        Route::get('/create', [CurrencyController::class, 'create'])->name('currency.create');
        Route::post('/store', [CurrencyController::class, 'store'])->name('currency.store');
        Route::get('/edit/{id}', [CurrencyController::class, 'edit'])->name('currency.edit');
        Route::post('/update', [CurrencyController::class, 'update'])->name('currency.update');
        Route::get('/delete/{id}', [CurrencyController::class, 'delete'])->name('currency.delete');
        Route::get('/status/{id}', [CurrencyController::class, 'status'])->name('currency.status');

        Route::get('trashed', [CurrencyController::class, 'trashed'])->name('currency.trashed');
        Route::get('trashed/data', [CurrencyController::class, 'trashedData'])->name('currency.trashed.data');
        Route::get('/permanent-delete/{id}', [CurrencyController::class, 'permanentDelete'])->name('currency.permanent.delete');
        Route::get('permanent-delete-all', [CurrencyController::class, 'permanentDeleteAll'])->name('currency.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [CurrencyController::class, 'undoTrashed'])->name('currency.undo.trashed');
        Route::get('/restore-all', [CurrencyController::class, 'restoreAll'])->name('currency.restore.all');
    });
    //end size

    //Language
    Route::group(['prefix' => 'language'], function () {
        Route::get('', [LanguageController::class, 'index'])->name('language');
        Route::get('data', [LanguageController::class, 'data'])->name('language.data');
        Route::get('/create', [LanguageController::class, 'create'])->name('language.create');
        Route::post('/store', [LanguageController::class, 'store'])->name('language.store');
        Route::get('/edit/{id}', [LanguageController::class, 'edit'])->name('language.edit');
        Route::post('/update', [LanguageController::class, 'update'])->name('language.update');
        Route::get('/delete/{id}', [LanguageController::class, 'delete'])->name('language.delete');
        Route::get('/status/{id}', [LanguageController::class, 'status'])->name('language.status');

        Route::get('translate/{id}', [LanguageController::class, 'translate'])->name('language.translate');


        Route::post('/store/key/{id}', [LanguageController::class, 'storeKey'])->name('language.store.key');
        Route::get('/delete/key/{id}', [LanguageController::class, 'deleteKey'])->name('language.delete.key');
        Route::get('edit/key/{id}/{data}', [LanguageController::class, 'editKey'])->name('language.edit.key');
        Route::post('update/key/{id}', [LanguageController::class, 'updateKey'])->name('language.update.key');
    });
    //end Language

    //role-permission
    Route::group(['prefix' => 'role-permission'], function () {
        Route::get('', [RolePermissionController::class, 'index'])->name('role.permission');
        Route::get('data', [RolePermissionController::class, 'data'])->name('role.permission.data');
        Route::get('/create', [RolePermissionController::class, 'create'])->name('role.permission.create');
        Route::post('/store', [RolePermissionController::class, 'store'])->name('role.permission.store');
        Route::get('/edit/{id}', [RolePermissionController::class, 'edit'])->name('role.permission.edit');
        Route::post('/update', [RolePermissionController::class, 'update'])->name('role.permission.update');
        Route::get('/delete/{id}', [RolePermissionController::class, 'delete'])->name('role.permission.delete');
        Route::get('/status/{id}', [RolePermissionController::class, 'status'])->name('role.permission.status');
    });
    //end role-permission

    //language settings
    //        Route::get('/language', 'LanguageController@langManage')->name('language.manage');
    //        Route::post('/language', 'LanguageController@langStore')->name('language.manage.store');
    //        Route::post('/language/delete/{id}', 'LanguageController@langDel')->name('language.manage.del');
    //        Route::post('/language/update/{id}', 'LanguageController@langUpdate')->name('language.manage.update');
    //        Route::get('/language/edit/{id}', 'LanguageController@langEdit')->name('language.key');
    //        Route::post('/language/import', 'LanguageController@langImport')->name('language.importLang');
    //
    //        Route::post('language/store/key/{id}', 'LanguageController@storeLanguageJson')->name('language.store.key');
    //        Route::post('language/delete/key/{id}', 'LanguageController@deleteLanguageJson')->name('language.delete.key');
    //        Route::post('language/update/key/{id}', 'LanguageController@updateLanguageJson')->name('language.update.key');
    //end language settings

    Route::get('custom-css', [ExtraController::class, 'customCss'])->name('custom.css');
    Route::post('custom-css/save', [ExtraController::class, 'customCssSave'])->name('custom.css.save');

    Route::group(['prefix' => 'backup'], function () {
        Route::get('', [ExtraController::class, 'backup'])->name('backup');
        Route::get('save', [ExtraController::class, 'backupSave'])->name('backup.save');
        Route::get('delete/{file}', [ExtraController::class, 'backupDelete'])->name('backup.delete');
        Route::get('download/{file}', [ExtraController::class, 'backupDownload'])->name('backup.download');
    });

    // social links
    Route::group(['prefix' => 'social-link'], function () {
        Route::get('get-social-link-data', [SocialLinkController::class, 'socialLinkData'])->name('social-link.data');
        Route::post('/update-social-link', [SocialLinkController::class, 'updateSocialLink'])->name('social-link.update_link');
    });
});
