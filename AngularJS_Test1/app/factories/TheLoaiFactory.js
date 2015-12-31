var TheLoaiFactory = function ($http) {
    var theLoaiFactory = {};
    var urlBase = 'api/TheLoai';

    theLoaiFactory.getTheLoais = function () {
        return $http.get(urlBase);
    };

    theLoaiFactory.getTheLoai = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    theLoaiFactory.insertTheLoai = function (theloai) {
        return $http.post(urlBase, theloai);
    };

    theLoaiFactory.updateTheLoai = function (theloai) {
        return $http.put(urlBase + '/' + theloai.TheLoaiId, theloai);
    };

    theLoaiFactory.deleteTheLoai = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return theLoaiFactory;
}

TheLoaiFactory.$inject = ['$http'];