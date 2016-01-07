var TinTucCtr = function ($scope, TinTucFactory, $stateParams) {
    console.log('Load tin tức controller...')
    $scope.TheLoaiId = $stateParams.id;
    $scope.TinTucId = $stateParams.tintucid;
    //console.log($scope.TheLoaiId);
    console.log('Thể loại ID: ' + $stateParams.id);
    //console.log('Tin tức ID: ' + $stateParams.tintucid);

    $scope.TinTucs;
    $scope.TenTheLoai;

    getTinTucByTheLoaiId($scope.TheLoaiId);
    //getChiTietTinTuc($scope.TinTucId);

    function getTinTucByTheLoaiId(id) {
        TinTucFactory.getTinTucByTheLoaiId(id)
        .success(function (data) {
            $scope.TinTucs = data;
            console.log(data)
            console.log('The loai: ' + id);
        })
        .error(function () {
            alert('lỗi.....');
        });
    };

    //function getTenTheLoai(id)
    //{
    //    TheLoaiFactory.getTheLoai(id)
    //    .success(function (data) {
    //        $scope.TenTheLoai = data.TenTheLoai;
    //    })
    //    .error(function () {
    //        console.log('Lỗi hàm : getTenTheLoai');
    //    });
    //}

    //var tintucID = $scope.TinTucId;
    function getChiTietTinTuc(tintucid) {
        TinTucFactory.getTinTuc(tintucid)
        .success(function (data) {
            $scope.TinTuc = data;
            console.log('đây là tin tức: ' + data)
        })
        .error(function () {
            alert('lỗi getChiTietTinTuc.....');
        });
    }

    if ($stateParams.tintucid && $stateParams.tintucid != "") {
       
        $scope.TinTuc = getChiTietTinTuc($scope.TinTucId);

    };

    //console.log($scope.TinTuc.NoiDung);
}

TinTucCtr.$inject = ['$scope', 'TinTucFactory', '$stateParams']