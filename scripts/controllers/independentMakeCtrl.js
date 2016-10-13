/**
 * Created by HongchunShen on 2016/9/7.
 */
angular.module("app").controller("independentMakeCtrl",function($rootScope,$scope,$mdDialog){
    $scope.has_no_data=false;
    //吃住行游购娱弹出菜单。
    var idx=null;
    $scope.independentMake_add=function(ev,index){
        idx=index;
        $mdDialog.show({
            controller: independentMake_add_ctrl,
            templateUrl: 'views/independentMake_add.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false
        });
    };

    //吃住行游购娱弹出菜单controller。
    function independentMake_add_ctrl($scope, $mdDialog) {

        $scope.six_icon=false;
        $scope.hide_six_icon=function(){
            $scope.six_icon=true;
        };

        $scope.independent_icon_six=["fa fa-cutlery","fa fa-hotel","fa fa-car","fa fa-institution","fa fa-shopping-cart","fa fa-cubes"];
        $scope.titles=["cutlery","hotel","car","institution","shopping-cart","cubes"];
        $scope.cutlery={
            type:"meal",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        $scope.hotel={
            type:"hotel",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        $scope.car={
            type:"traffic",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        $scope.institution={
            type:"tour",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        $scope.shopping_cart={
            type:"shopping",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        $scope.cubes={
            type:"amusement",
            startTime: "",
            startStation: "",
            transportation: "",
            arriveTime: "",
            terminalStation: ""
        };
        for(var i=1;i<6;i++){
            $scope.titles[i]=false;
        }

        $scope.open=function(index){
            for(var i=0;i<6;i++){
                $scope.titles[i]=false;
            }
            $scope.titles[index]=true;

            $scope.six_icon=true;       //隐藏图标，只能使用户一次编辑。
        };
        $scope.hide = function() {

            $mdDialog.hide();
            $rootScope.independent_list[idx].what.push($scope.car);
            //在添加行程某一天的具体计划时，隐藏暂无数据的提示。
            if($rootScope.independent_list[idx].what.length>0){
                $scope.has_no_data=true;
            }else{
                $scope.has_no_data=false;
            }
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
    //吃住行游购娱icon匹配
    $scope.getIconClass = function(event_type) {
        var icon_map = {
            meal:"fa fa-cutlery",
            hotel:"fa fa-building md-warn",
            traffic:"fa fa-cab md-accent",
            tour:"fa fa-tachometer",
            shopping:"fa fa-shopping-cart",
            amusement:"fa fa-delicious"
        };
        for(var i in icon_map)
        {
            if(i===event_type){
                return icon_map[i];
            }
        }
    };
    //在行程计划中添加一天
    $scope.add_day=function(){
        var one_day={
            whatDay: "",
            Date: "",
            what: []
        };
        $scope.independent_list.push(one_day);
    }
});