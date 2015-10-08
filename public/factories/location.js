app.factory('geo', ['$http', function ($http) {

	function getLocation(callback) {
		navigator.geolocation.getCurrentPosition(callback);
  		
  	}

	function getMyPlace(coords, callback) {
		console.log(coords);
        $http.get('http://localhost:3000/myplace', {
            params: {
            	lat: coords.latitude,
            	long: coords.longitude
            } 
        }).then(function (res) { // success
          		callback(res);
 		}, function (res) { // error

       	});
    };

	function getTrends(id, callback) {
		console.log(id);
        $http.get('http://localhost:3000/trends', {
            params: {
            	id: id
            } 
        }).then(function (res) { // success
          		callback(res);
 		}, function (res) { // error

       	});
    };
    
    return {
       
        getMyPlace: getMyPlace,
        getLocation: getLocation,
        getTrends: getTrends
        
    };
}]);
