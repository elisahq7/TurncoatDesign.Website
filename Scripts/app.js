var app = angular.module("app", [
	"ngRoute",
    "ngMaterial"
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

		$scope.designers = [
            { 
                name: 'Elisa Seeds',
                email: 'elisaseeds@icloud.com',
                position: 'Owner / Designer / Front-End Developer'
            },{ 
                name: 'Bethany Cech',
                email: 'bethanycech@gmail.com',
                position: 'Designer'
            }
        ];

          $scope.socialMedia.isOpen = false;
          $scope.socialMedia.selectedMode = 'md-fling';
          $scope.socialMedia.selectedDirection = 'left';
	}
]);

app.controller("PortfolioCtrl", [ "$scope", 
    function($scope) {
        $scope.name = "Hello World!";
    }
]);