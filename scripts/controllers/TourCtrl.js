/**
 * Created by HongchunShen on 2016/8/5.
 */
angular.module("app").controller("TourCtrl",function($rootScope,$scope){
    $rootScope.collection=[];                                            //我的收藏迭代数组
    $scope.addCollection=function(index){
            $rootScope.collection.push($scope.items[index]);             //将收藏的item放入我的收藏中
    };
                         //将推荐列表添加到我的收藏end
    $scope.items=[
        {
            idx:1,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress001.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:2,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress002.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:3,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress003.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:4,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress004.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:5,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress005.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:6,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress006.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {
            idx:7,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress001.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        },
        {   idx:8,
            icon:"md-accent fa fa-heart-o",
            tourName:"海棠湾万丽度假酒店3天两晚",
            tourPhoto:"img/impress002.jpg",
            note:"南海仲裁沸沸扬扬，正值中菲关系的敏感时期，然而" +
                "旅行可以让我们暂时抛开政治。时至今日，时空的距离" +
                "无法隔绝我对巴拉望的回忆。选择巴拉望，是一种隐世" +
                "态度的体现，游程本在其次；然而它的美自然纯粹，海" +
                "上数日的经历直击心灵，让你在不经意间想起时，仍会无" +
                "比清晰地浮现。既如此，那就循着记忆，重温那段巴拉望时光。"
        }

    ];
                          //推荐列表迭代数组end
    $scope.selected=[];
    $scope.toggle_add_del_collection=function(item,list){
        var idx=list.indexOf(item);
        if(idx>-1){
            list.splice(item,1);
        }else{
            list.push(item);
        }
    };
    $scope.is_selected=function(item,list){
        return list.indexOf(item)>-1;
    };
    //改变图标收藏状态end
});


