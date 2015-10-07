app.controller('tlCtrl', ['$scope', '$http', 'ajax', function ($scope, $http, AJAX) {
    
    $http.get('http://localhost:3000/timeline', {
        params: {
            count: 10
        }
    }).then(function (res) {
        $scope.tweets = res.data;
    });

}]);


app.controller('tweetCtrl', ['$scope', '$routeParams', 'ajax', function ($scope, $routeParams, AJAX){
   var timeline = (function () {
    $scope.loading = true;
    console.log('we are inside the function inside de var timeline = function ()');
    AJAX.query({
    url: 'http://localhost:3000/timeline',
        }, function (data) { // callback
          $scope.loading = false;
              console.log('We are in the function inside de ajax.querydata= ');
              console.log('data= ', data);
          if (data) {
            /*$scope.timeline = data;*/
            console.log('we entry to the if');
            $scope.timeline= data;
            console.log('timeline =', timeline);
            console.log('$scope.timeline =', $scope.timeline);
    
            }
        });
  })();
  console.log('that is all folks');
  console.log('after de definition timeline=', timeline); 
  console.log('we are outside de var, and the $scope.timeline= ' , $scope.timeline);
}]);



