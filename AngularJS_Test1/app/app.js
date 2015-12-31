/// <reference path="templates/view/v_Info.html" />
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);
myApp.controller('LoadPageCtr', LoadPageCtr);
myApp.controller('NhanVienCtr', NhanVienCtr);
myApp.controller('ErrorCtr', ErrorCtr);
myApp.controller('TheLoaiCtr', TheLoaiCtr);
myApp.controller('TinTucCtr', TinTucCtr);


myApp.factory('NhanVienFactory', NhanVienFactory);
myApp.factory('Interceptor', Interceptor);
myApp.factory('TheLoaiFactory', TheLoaiFactory);
myApp.factory('TinTucFactory', TinTucFactory);


var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/partial/p_info.html',
            controller: 'LoadPageCtr'
            //views: {
            //    '': {
            //        templateUrl: 'app/templates/partial/p_info.html',
            //        controller: LoadPageCtr
            //    },
            //    //'viewMenu@home': {
            //    //    templateUrl: 'app/templates/partial_menu.html'
            //    //},
            //    //'viewInfo@home': {
            //    //   templateUrl: 'app/templates/partial_info.html'
            //    //}
            //}

        })
    .state('about', {
        url: '/about',
        templateUrl: 'app/templates/view/v_About.html'
        //views: {
        //    '': { templateUrl: 'app/templates/view/v_About.html' }
        //}
    })
    .state('new-nonurl', {
        url: '/new',
        template: 'app/templates/view/test.html',
    })
    .state('404', {
        url: '/404',
        templateUrl: 'app/templates/view/v_404.html',
        controller: 'ErrorCtr'
        //views: {
        //    '': {
        //        templateUrl: 'app/templates/view/v_404.html',
        //        controller: ErrorCtr
        //    }
        //}
    })
    .state('nhanvien', {
        url: '/nhan-vien',
        templateUrl: 'app/templates/view/v_NhanVien.html',
        controller: 'NhanVienCtr'
        //views: {
        //    '': {
        //        templateUrl: 'app/templates/view/v_NhanVien.html',
        //        controller: NhanVienCtr
        //    }
        //}
    })
    .state('tintuc', {
        url: '/tintuc',
        
        views: {
            '@': {
                templateUrl: 'app/templates/view/v_TinTuc.html',
                controller: 'TheLoaiCtr',
            },

            'v_contentTinTuc@tintuc': {
                templateUrl: 'app/templates/partial/p_info.html',
               // controller: TinTucCtr
            }

        }
    })
    .state('tintuc.theloai', {
        url: '^/theloai-{id}',
        views: {
            'v_contentTinTuc': {
                templateUrl: 'app/templates/view/v_Index.html',
                controller: 'TinTucCtr'
            }
        }
    })
    .state('tintuc.theloai.chitiettintuc', {
        url: '/tintuc-{tintucid}',
        views: {
            'v_contentTinTuc@tintuc': {
                templateUrl: 'app/templates/partial/p_DetailTinTuc.html',
                controller: 'TinTucCtr'
                //controller: function($scope,$stateParams)
                //{
                //    $scope.TinTuc = {
                //        NoiDung: 'ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS and JavaScript'
                //    }
                //}
            }
        }
    });
//.state('new-nonurl', {
//    url: '/new',
//    params: {
//        portfolioId: null,
//    },
//    templateUrl: 'app/templates/view/test.html',
//    controller: function($scope, $stateParams) {
//        $scope.portfolioId = $stateParams.portfolioId;
//    }
//});
//.state('tintuc.detail', {
//    url: '-detail/:TheLoaiId',
//    view: {
//        '': {
//            templateUrl: 'app/templates/view/v_TinTuc.html'
//        },
//        'v_MenuTinTuc@tintuc': {
//            templateUrl: 'app/templates/partial/p_MenuTinTuc.html',
//            controller: TheLoaiCtr

//        },
//        'v_ContentTinTuc@tintuc': {
//            templateUrl: 'app/templates/partial/p_ContentTinTuc.html',
//            controller: TinTucCtr
//        }
//    }

//});

$httpProvider.interceptors.push('Interceptor');

}


configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider'];
myApp.config(configFunction);