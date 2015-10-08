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
            console.log('data =' , data);
            console.log('$scope.timeline =' , $scope.timeline);
            console.log('$routeParams.id =' , $routeParams.id);
            console.log('data.length =' , data.length);
            for (var i = 0; i < data.length; i++) {
              console.log('estoy dentro del for');
              console.log(' $routeParams.id=', $routeParams.id );
              console.log('data[i].id = ', data[i].id);
              if (data[i].id == $routeParams.id) {
                console.log('estoy dentro del if');
                window.alert('adentro del if');
                console.log('we are inside de if data[i].id === $routeParams !!!!');
                $scope.twitt = data[i];
                console.log(' data[i]=', data[i]);
                console.log(' i=',i );
                
              }};
            }
          });
  
}]);

