app.controller('tlCtrl', ['$scope', '$http', 'ajax', function ($scope, $http, AJAX) {
    
    $http.get('http://localhost:3000/timeline', {
        params: {
            count: 10
        }
    }).then(function (res) {
        $scope.tweets = res.data;
    });

}]);


app.controller('tweetCtrl',['$scope', '$routeParams', 'ajax', function ($scope, $routeParams, AJAX){
  console.log('controller tweetCtrl------------------------------');
      
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

  AJAX.query({
    url: 'http://localhost:3000/trends?id=' + geo.woeid
      }, function (data) {
         console.log(data);
        $scope.woeid = $routeParams.woeid;
        $scope.trend = data;
        console.log(trend);
    
      

    });

}]);

