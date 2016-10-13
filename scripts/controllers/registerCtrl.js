/**
 * Created by HongchunShen on 2016/8/8.
 */
angular.module("app").controller("registerCtrl",function($scope,$mdDialog,$http){
    $scope.userDate={
        userName:"",
        telNum:"",
        password:"",
        verificatalCode:""
    };
    $scope.sub=function(){
        $http.post("submit.php",$scope.userDate,function(){
            alert("注册成功！")
        });
        console.log($scope.userDate);
    };
    $scope.showCopyRight = function(ev) {
        $mdDialog.show({
            templateUrl: 'views/CopyRight.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
    };
});