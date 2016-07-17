var app = angular.module("app", [
	"ngRoute"
]);

app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                 templateUrl: "Pages/Home.html",
                 controller: "HomeCtrl"
            })
            .when("/portfolio", {
                 templateUrl: "Pages/Portfolio.html",
                 controller: "PortfolioCtrl"
             })
             .otherwise({
                redirectTo: "/"
            });
    }
]);

app.controller("HomeCtrl", [ "$scope", 
	function($scope) {
		$scope.name = "Hello World!";
	}
]);

app.controller("PortfolioCtrl", [ "$scope", 
    function($scope) {
        $scope.name = "Hello World!";
    }
]);