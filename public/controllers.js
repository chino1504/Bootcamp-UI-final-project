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
	var description = function () {
		AJAX.query({
			url: 'http://localhost:3000/timeline?count=100',
		});
		console.log(description);
		}
	}];
			