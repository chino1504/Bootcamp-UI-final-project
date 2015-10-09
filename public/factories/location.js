app.factory('geo', ['$http', function ($http) {

	function getLocation(callback) {
		navigator.geolocation.getCurrentPosition(callback);
  		
  	}

	function getMyPlace(coords) {
		console.log(coords);
        return $http.get('http://localhost:3000/myplace', {
            params: {
            	lat: coords.latitude,
            	long: coords.longitude
            } 
        });
    };

	function getTrends(id) {
		console.log(id);
        return $http.get('http://localhost:3000/trends', {
            params: {
            	id: id
            } 
        }).then(function (res) { 
      		return res.data[0];
 		}, function (res) { 

       	});
    };
    
    return {
       
        getMyPlace: getMyPlace,
        getLocation: getLocation,
        getTrends: getTrends
        
    };
}]);
