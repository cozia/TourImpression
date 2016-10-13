/**
 * Created by HongchunShen on 2016/8/8.
 */
angular.module("app").controller("loginingCtrl",function($scope,$http){
    $scope.vip={
        userName:"",
        password:""
    };
    $scope.submit=function(){
        $http.post("vip.php",$scope.vip).success(function(data){
                console.log(data);
            }
        ).error(function(data,status,headers,config){
                console.log($scope.vip);
            });

    };

});