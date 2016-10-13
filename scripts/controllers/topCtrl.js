/**
 * Created by HongchunShen on 2016/8/6.
 */
app.controller("topCtrl",function($rootScope,$scope,$mdSidenav){
    $rootScope.collection=[];       //我的收藏数据，方便myCollection页面获取。
    $rootScope.default_info={
        agenda_title:"",
        agenda_time:"",
        agenda_start_date:"",
        datePicker:"",
        selResult:""
    };                              //用户出游的基本信息（出发日期，目的地，出游天数）
    $rootScope.independent_list= [

    ];
    $rootScope.independent_list_child={
        whatDay: "",
        Date: "",
        what: [
            {
                type:"traffic",
                startTime: "",
                startStation: "",
                transportation: "",
                arriveTime: "",
                terminalStation: ""
            },
            {
                type:"traffic",
                startTime: "",
                startStation: "",
                transportation: "",
                arriveTime: "",
                terminalStation: ""
            }
        ]
    };
    $scope.menus=[
        {
            title:"首页",
            type:"link",
            state:"index"
        },
        {
            title:"行程制定",
            type:"link",
            state:"index.agendaMaker"
        },
        {
            title:"我的收藏",
            type:"link",
            state:"index.myCollection"
        },
        {
            title:"个人中心",
            type:"link",
            state:"index.presonalCenter"
        }
    ];                                      //右侧滑入菜单导航路由设置，具体配置见App.js页面。
    $scope.userName="点击头像登录";
    $scope.userPic="img/face.jpg";          //用户头像地址
    $scope.openNav = function(){
        $mdSidenav('Right').toggle();
    };
    $scope.closeNav = function(){
        $mdSidenav('Right').close();
    };
});