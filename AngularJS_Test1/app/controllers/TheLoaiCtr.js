var TheLoaiCtr = function ($scope, TheLoaiFactory) {

    console.log('Load thể loại controller .....');
    $scope.TheLoais;

    getTheLoais();

    function getTheLoais() {
        TheLoaiFactory.getTheLoais()
        .success(function (data) {
            $scope.TheLoais = data;
            console.log(data);
        })
        .error(function (error) {
            alert('Lỗi load thể loại....')
        });
    }
}

TheLoaiCtr.$inject = ['$scope', 'TheLoaiFactory'];