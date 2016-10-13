/**
 * Created by HongchunShen on 2016/8/30.
 */
angular.module("app").controller("travelnotesCtrl",function($scope,$timeout,$http){
    $scope.travelnotes_Info={
        assessment:"",
        travelnotes_Mytravels:"",
        travelnotes_destinations:"",
        travelnotes_time:"",
        travelnotes_topic:""
    };
    $scope.travelnotes_submit=function(){
        $http.post("url",$scope.travelnotes_Info).success(function(){

        }).error(function(){

        })
    }
});