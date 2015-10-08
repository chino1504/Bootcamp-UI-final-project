app.factory('geo', ['$http', function ($http) {

	navigator.geolocation.getCurrentPosition(mostrarPosicion);
  	function mostrarPosicion(pos) {
  	alert("Estás en (" + pos.coords.latitude + "," + pos.coords.longitude +")");


	 getMyPlace = function(coord, latitude, longitude, cb) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/myplace?lat=' + pos.coords.latitude + '&long=' + pos.coords.longitude

        }).then(function (res) { // success
          cb(res);
        }, function (res) { // error

        });
   };

    return {
       
        getMyPlace: getMyPlace
        
    };
}]);
