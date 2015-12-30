var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('LoadPageCtr', LoadPageCtr);
myApp.controller('NhanVienCtr', NhanVienCtr);

myApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
myApp.factory('NhanVienFactory', NhanVienFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //}).hashPrefix('!');
    var baseSiteUrlPath = $("base").first().attr("href");
    var baseTemplateUrl = baseSiteUrlPath + "app/templates/";


    $routeProvider.
        when('/nhanVien', {
            templateUrl: 'Home/NhanVien',
            controller: NhanVienCtr
        })
        //.when('/routeTwo/:donuts', {
        //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        //})
        .when('/home', {
            templateUrl: 'Home/About',
            controller: LoadPageCtr
        })
        .when('/', {
            templateUrl: 'Home/Info',
            controller: LoadPageCtr
        })
        .when('/nhanvien/add', {

        })
        .otherwise({
            redirectTo: '/'
        });
        //when('/angular/nhanvien', {
        //    templateUrl: baseTemplateUrl + 'Index.html'
        //})
        ////.when('/routeTwo/:donuts', {
        ////    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        ////})
        //.when('/angular/home', {
        //    templateUrl: 'Home/About',
        //    controller: LoadPageCtr
        //})
        //.when('/', {
        //    templateUrl: 'Home/Info',
        //    controller: LoadPageCtr
        //})
        //.when('/nhanvien/add', {

        //})
        //.otherwise({
        //    //redirectTo: '/'
        //    redirectTo: function () {

        //        if (window.location.pathname == baseSiteUrlPath || window.location.pathname == baseSiteUrlPath + "angular") {
        //            window.location = baseSiteUrlPath + "angular/index";
        //        } else {
        //            window.location = baseSiteUrlPath + "angular/page-not-found";
        //        }
        //    },
        //});
   
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
    //use the HTML5 History API
    $locationProvider.html5Mode(true);
    //$locationProvider.html5Mode(false).hashPrefix('!');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];
myApp.config(configFunction);