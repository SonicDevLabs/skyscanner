angular.module("skyscanner").controller("masterCtrl", ['$scope', 'masterService', function($scope, masterService) {

  $scope.flightsFrom = (origin) => {
    masterService.flightsFrom(origin).then(RESPONSE => {
      console.log("API RESPONSE: ", RESPONSE.data);
    });
  };

}]);
