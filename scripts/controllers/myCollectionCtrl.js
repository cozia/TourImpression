/**
 * Created by HongchunShen on 2016/8/15.
 */
angular.module("app").controller("myCollectionCtrl",function ($rootScope,$scope){
    $scope.collections=$rootScope.collection;
});