app.controller('tlCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $http.get('http://localhost:3000/timeline', {
        params: {
            count: 10
        }
    }).then(function (res) {
        $scope.tweets = res.data;
    });

}]);


app.controller('tweetCtrl',['$scope', '$routeParams', 'ajax', function ($scope, $routeParams, AJAX){
        
    AJAX.query({
      url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
          
          if (data) {
            
            $scope.id = $routeParams.id;
            
            for (var i = 0; i < data.length; i++) {
             
              if (data[i].id == $routeParams.id) {
                
                
                $scope.twitt = data[i];
                               
              }};
            }
          });
  
}]);

app.controller('trendCtrl', ['$scope', '$routeParams', 'ajax', 'geo', function($scope, $routeParams, AJAX, geo) {

  geo.getLocation(function (pos){
    console.log("Estás en (" + pos.coords.latitude + "," + pos.coords.longitude +")");

  })
  geo.getMyPlace({latitude:-31.420083299999995,longitude:-64.1887761}, function (res) {
    console.log(res.data);
  })

  geo.getTrends(23424747, function (res) {
    console.log(res.data);
    $scope.mytrends = res.data[0];

  })


}]);

