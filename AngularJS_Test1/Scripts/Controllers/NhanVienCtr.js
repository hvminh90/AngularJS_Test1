﻿var NhanVienCtr = function ($scope, NhanVienFactory) {
    $scope.status;
    $scope.NhanViens;
    $scope.show = false;
    $scope.objNhanVien;
    getNhanViens();

    function getNhanViens() {
        NhanVienFactory.getNhanViens()
        .success(function (data) {
            $scope.NhanViens = data;
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }

    function updateNhanVien(nhanvien) {

        //var nhanVien = this.NhanVien;
        console.log(nhanvien);
        NhanVienFactory.putNhanVien(nhanvien)
        .success(function () {
            $scope.status = 'Updated Customer! Refreshing customer list.';
            $scope.show = !$scope.show;
            $scope.HoTen = '';
            $scope.Email = '';
            $scope.DiaChi = '';
            $scope.SoDienThoai = '';
            $scope.ID = '';
            getNhanViens();
        })
        .error(function (error) {
            $scope.status = 'Unable to update customer: ' + error.message;
        });
    }

    function insertNhanVien() {
        var nhanVien = {
            ID: $scope.ID == '' ? '0' : $scope.ID,
            HoTen: $scope.HoTen,
            Email: $scope.Email,
            DiaChi: $scope.DiaChi,
            SoDienThoai: $scope.SoDienThoai
        };

        NhanVienFactory.insertNhanVien(nhanVien)
        .success(function () {
            $scope.status = 'Inserted Customer! Refreshing customer list.';
            //$scope.NhanViens.put(nhanVien);
            $scope.show = !$scope.show;
            $scope.HoTen = '';
            $scope.Email = '';
            $scope.DiaChi = '';
            $scope.SoDienThoai = '';
            $scope.ID = '';
            getNhanViens();
        })
        .error(function (error) {
            $scope.status = 'Unable to insert customer: ' + error.message;
        });
    }

    $scope.deleteNhanVien = function (id) {
        bootbox.confirm("Are you sure want to delete?", function (result) {
            if (result) {
                NhanVienFactory.deleteNhanVien(id)
                .success(function () {
                    $scope.status = 'Deleted Customer! Refreshing customer list.';
                    getNhanViens();
                })
                .error(function (error) {
                    $scope.status = 'Unable to delete customer: ' + error.message;
                });
            }
        }).find("div.modal-content").addClass("confirmWidth");

    }

    $scope.themnhanvien = function () {
        $scope.show = true;
    }

    $scope.cancelSave = function () {


        $scope.HoTen = '';
        $scope.Email = '';
        $scope.DiaChi = '';
        $scope.SoDienThoai = '';
        $scope.ID = '';
        $scope.show = !$scope.show;
    }

    $scope.editNhanVien = function (id) {
        console.log(id);
        if ($scope.show == false) {
            $scope.show = true;
        }
        NhanVienFactory.getNhanVien(id)
        .success(function (data) {
            console.log(data);
            //$scope.show = !$scope.show;
            $scope.HoTen = data.HoTen;
            $scope.Email = data.Email;
            $scope.DiaChi = data.DiaChi;
            $scope.SoDienThoai = data.SoDienThoai;
            $scope.ID = data.ID;
            //$scope.objNhanVien = data;
        })
        .error(function (error) {
            $scope.status = 'Error load nhân viên: ' + error.message;
        });

    }

    $scope.InsUpdNhanVien = function () {
        if ($scope.ID != '' && $scope.ID != '0') {
            var nhanvienEdit = {
                ID: $scope.ID,
                HoTen: $scope.HoTen,
                Email: $scope.Email,
                DiaChi: $scope.DiaChi,
                SoDienThoai: $scope.SoDienThoai
            }
            updateNhanVien(nhanvienEdit);
        }
        else {
            insertNhanVien();
        }
    }

}

NhanVienCtr.$inject = ['$scope', 'NhanVienFactory'];