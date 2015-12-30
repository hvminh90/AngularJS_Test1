var myApp = angular.module('myApp', ['ui.router']);
myApp.controller('LoadPageCtr', LoadPageCtr);
myApp.controller('NhanVienCtr', NhanVienCtr);
myApp.controller('ErrorCtr', ErrorCtr);


myApp.factory('NhanVienFactory', NhanVienFactory);
myApp.factory('Interceptor', Interceptor);


var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: 'app/templates/Info.html' },
                'viewMenu@home': {
                    templateUrl: 'app/templates/partial_menu.html'
                },
                'viewInfo@home': {
                    templateUrl: 'app/templates/partial_info.html'
                }
            }

        })
    .state('about', {
        url: '/about',
        views: {
            '': { templateUrl: 'app/templates/About.html' }
        }
    })
    .state('404', {
        url: '/404',
        views: {
            '': { templateUrl: 'app/templates/404.html' }
        }
    })
    .state('nhanvien', {
        url: '/nhanvien',
        views: {
            '': {
                templateUrl: 'app/templates/NhanVien.html',
                controller:NhanVienCtr
            }
        }
    });

    $httpProvider.interceptors.push('Interceptor');
   
}


configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider'];
myApp.config(configFunction);