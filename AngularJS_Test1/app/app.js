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

    //$locationProvider.hashPrefix('!').html5Mode(true);
    //$urlRouterProvider.otherwise('/home');

   //$urlRouterProvider.when("", "/home");
   //$urlRouterProvider.when("/", "/home");

    //// For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/partial/p_info.html',
            controller: 'LoadPageCtr',
            onEnter: function () {
                console.log("enter home");
            }
        })
    .state('about', {
        url: '/about',
        templateUrl: 'app/templates/view/v_About.html'
         
    })
    .state('404', {
        url: '/404',
        templateUrl: 'app/templates/view/v_404.html',
        controller: 'ErrorCtr'

    })
    .state('nhanvien', {
        url: '/nhan-vien',
        templateUrl: 'app/templates/view/v_NhanVien.html',
        controller: 'NhanVienCtr'

    })
    .state('tintuc', {
        url: '/tintuc',

        views: {
            "@":{
                templateUrl: 'app/templates/view/v_TinTuc.html',
                controller:TheLoaiCtr
                        //function ($scope)
                        //{
                        //    $scope.TheLoais = [{ TheLoaiId: 1, TenTheLoai: 'Thể loại 1' }, { TheLoaiId: 2, TenTheLoai: 'Thể loại 2' },
                        //    {TheLoaiId:3,TenTheLoai:'Thể loại 3'}];
                        //}
            },
            
            '@tintuc': {
                templateUrl: 'app/templates/partial/p_info.html',
                
            }

        }
        
    })
    .state('tintuc.theloai', {
        url: '^/the-loai-:id',
         
        templateUrl: 'app/templates/view/v_Index.html',
        controller:TinTucCtr,
        //    function ($scope, $stateParams) {
        //    var arrtintuc = [
        //        { TinTucId: 1, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 1', TheLoaiId: 1 },
        //         { TinTucId: 4, TieuDe: 'Tiêu đề 1.1', NoiDung: 'Nội dung tin tức 1.1', TheLoaiId: 1 },
        //        { TinTucId: 2, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 2', TheLoaiId: 2 },
        //        { TinTucId: 3, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 3', TheLoaiId: 3 }
        //    ];
        //    var arr = [];
        //    for (var i = 0; i < arrtintuc.length; i++) {
        //        if (arrtintuc[i].TheLoaiId == $stateParams.id) {
        //            arr.push(arrtintuc[i]);
        //        }
        //    }
        //    $scope.TinTucs = arr;
        //    $scope.TheLoaiId = $stateParams.id

        //},
        onEnter: function () {
            console.log("enter the loai");
        }
    })
    .state('tintuc.theloai.chitiettintuc', {
        url: '/tin-tuc-:tintucid',
        views: {
            '@tintuc': {
                templateUrl: 'app/templates/partial/p_DetailTinTuc.html',
                controller:TinTucCtr
                //    function ($scope, $stateParams) {
                //    var arrtintuc = [
                //        { TinTucId: 1, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 1', TheLoaiId: 1 },
                //         { TinTucId: 4, TieuDe: 'Tiêu đề 1.1', NoiDung: 'Nội dung tin tức 1.1', TheLoaiId: 1 },
                //        { TinTucId: 2, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 2', TheLoaiId: 2 },
                //        { TinTucId: 3, TieuDe: 'Tiêu đề 1', NoiDung: 'Nội dung tin tức 3', TheLoaiId: 3 }
                //    ];
                //    for (var i = 0; i < arrtintuc.length; i++) {
                //        if (arrtintuc[i].TinTucId == $stateParams.tintucid)
                //        {
                //            $scope.TinTuc = arrtintuc[i];
                            
                //        }
                //    }
                    
                //},
                //controller: function($stateParams)
                //{
                //    console.log("Tin Tức ID: " + $stateParams.tintucid);
                //}

            }
        },
         
        onEnter: function ($stateParams) {
            console.log("enter tin tuc detail:  " + $stateParams.tintucid);
        }
    });
    
    $httpProvider.interceptors.push('Interceptor');

}


configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider'];
myApp.config(configFunction);