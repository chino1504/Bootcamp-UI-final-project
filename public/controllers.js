app.controller('tlCtrl', ['$scope', '$http', 'ajax', function ($scope, $http, AJAX) {
    
    $http.get('http://localhost:3000/timeline', {
        params: {
            count: 10
        }
    }).then(function (res) {
        $scope.tweets = res.data;
    });

}]);


app.controller('tweetCtrl', ['$scope', 'ajax', function ($scope, AJAX) {
  var onetweet = function () {
        AJAX.query({
          url: 'http://localhost:3000/timeline',
          }, function (data) { // callback
          $scope.loading = false;

          if (data.results.length) {
            displaytweet(data.results[0].user);
          }
        });
      },

      displaytweet = function (res) {
        $scope.desc = res.user.description
      };
$scope.onetweet = onetweet;
}]);
			

