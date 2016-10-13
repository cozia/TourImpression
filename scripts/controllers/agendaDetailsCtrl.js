/**
 * Created by HongchunShen on 2016/8/9.
 */
angular.module("app").controller("agendaDetailsCtrl",function($rootScope,$scope,$mdDialog){
    $scope.agendaList=[
        {
            whatDay:"DAY 1",
            Date:"2016/08/10",
            what:[
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"8:30",
                            startStation:"荆州",
                            transportation:"train",
                            arriveTime:"10:00",
                            terminalStation:"武昌"
                        }
                    ]
                },
                {
                    type:"hotel",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
            ]
        }
    ];

    var icon_map = {
        meal:"fa fa-cultlery",
        hotel:"fa fa-building md-warn",
        traffic:"fa fa-cab md-accent",
        tour:"fa fa-tachometer",
        shopping:"fa fa-shopping-cart",
        amusement:"fa fa-delicious"
    };
    $scope.getIconClass = function(event_type) {
        for(var i in icon_map)
        {
            if(i===event_type){
                    return icon_map[i];
            }
        }
    };
//    $scope.showPrepare = function(ev) {
//        $mdDialog.show({
//            controller: showPrepareCtrl,
//            templateUrl: 'views/tourPrepareBefore.html',
//            parent: angular.element(document.body),
//            targetEvent: ev,
//            clickOutsideToClose:true
//        })
//    };
//    function showPrepareCtrl($scope, $mdDialog) {
//        $scope.prepareList=[
//            "旅行牙膏，牙刷，浴巾",
//            "相机及电源，SD卡",
//            "转换插头，手机充电器，移动电源",
//            "身份证，学生证",
//            "现金及信用卡",
//            "阳台收衣服，浇花，切断家里电源"
//        ];
//        $scope.hide = function() {
//            $mdDialog.hide();
//        };
//        $scope.cancel = function() {
//            $mdDialog.cancel();
//        };
//    }
    $scope.showAddAgenda = function(ev) {
        $mdDialog.show({
            controller: showAddAgendaCtrl,
            templateUrl: 'views/showAddAgenda.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
    };
    function showAddAgendaCtrl($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
});