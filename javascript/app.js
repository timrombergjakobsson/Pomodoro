angular.module("pomodoro", []);

function mainCtrl($scope) {
  $scope.timeRemaining = 0;
  $scope.pomodoro = function () {
		var endtime = new Date();
		endtime = endtime.setMinutes(endtime.getMinutes() + 25);
    $scope.current = {remainingTime : runtime,
											startTime : new Date() };
  };  
}
