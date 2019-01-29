(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.numItems = 0;
  $scope.messageToUser = "";

  $scope.checkIfTooMuch = function () {
  //  var lunchInput = $scope.lunchMenu.split(',');
    //$scope.numItems = ($scope.lunchMenu.split(',')).length;
    //$scope.lunchMenu =$scope.lunchMenu.split(',')
  //  console.log("Lunch input is " + lunchInput);
    if ($scope.lunchMenu == '') {   $scope.messageToUser = "Please enter data first.";}
    else if (($scope.lunchMenu.split(',')).length <=3) {$scope.messageToUser = "Enjoy!";}
    else {$scope.messageToUser = "Too much!";}

  };
};

})();
