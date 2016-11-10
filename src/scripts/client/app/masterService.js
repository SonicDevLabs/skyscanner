angular.module("skyscanner").service("masterService", ['$http', function($http) {

  this.flightsFrom = (origin) => {
    return $http({
      method: 'POST',
      url: '/api/skyscanner/from',
      data: {
        origin: origin
      }
    });
  }

}]);
