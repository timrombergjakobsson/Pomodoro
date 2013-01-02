angular.module("pomodoro", [])
.filter('countdown', function () {
  return function (currentTime, endTime) {
    if(currentTime >= endTime) {
      return 0;
    }
    return endTime - currentTime;
  };
});

function mainCtrl($scope, $timeout) {
  $scope.timeRemaining = 0;
  $scope.pomodoro = function () {
		var endTime = new Date();
		endTime.setMinutes(endTime.getMinutes() + 25);
    $scope.current = {
                        endTime: endTime
                    };
      $timeout($scope.updateTime, 1000);
  };

  $scope.updateTime = function () {
    $scope.now = Date.now();
    $timeout($scope.updateTime, 1000);
  };
}
