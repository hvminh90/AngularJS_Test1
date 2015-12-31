var TinTucCtr = function ($scope, TinTucFactory, $stateParams) {
    console.log('Load tin tức controller...')
    $scope.TheLoaiId = $stateParams.id;
    $scope.TinTucId = $stateParams.tintucid;
    
    console.log('Thể loại ID: ' + $stateParams.id);
    console.log('Tin tức ID: ' + $stateParams.tintucid);

    $scope.TinTucs;
   
    getTinTucByTheLoaiId($scope.TheLoaiId);
    //getChiTietTinTuc($scope.TinTucId);

    function getTinTucByTheLoaiId(id) {
        TinTucFactory.getTinTucByTheLoaiId(id)
        .success(function (data) {
            $scope.TinTucs = data;
            //console.log(data)
        })
        .error(function () {
            alert('lỗi.....');
        });
    };


    var tintucID = $scope.TinTucId;
    $scope.GetTinTuc = function getChiTietTinTuc()
    {
        console.log('Chi tiết tin tức....')
        console.log(tintucID);
        TinTucFactory.getTinTuc('1')
        .success(function (data) {
            $scope.TinTuc = data;
            console.log(data)
        })
        .error(function () {
            alert('lỗi getChiTietTinTuc.....');
        });
    }

    //console.log($scope.TinTuc.NoiDung);
}

TinTucCtr.$inject = ['$scope', 'TinTucFactory', '$stateParams']