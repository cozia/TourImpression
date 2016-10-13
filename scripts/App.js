/**
 * Created by HongchunShen on 2016/8/5.
 */
var app=angular.module("app",["ngMaterial","ui.router","oc.lazyLoad","ngAnimate","ngMessages"]);
app.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"views/tour.html",
            controller:"TourCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("scripts/controllers/TourCtrl.js");
            }]}
        })
        .state("index.search",{
            url:"/search",
            templateUrl:"views/search.html",
            controller:"searchCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/searchCtrl.js","styles/search.css"]});
            }]}
        })
        .state("index.login",{
            url:"/login",
            templateUrl:"views/login.html"
//            controller:"loginCtrl",
//            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
//                return $ocLazyLoad.load({files:["scripts/controllers/loginCtrl.js","styles/login.css"]});
//            }]}
        })
        .state("index.logining",{
            url:"/logining",
            templateUrl:"views/logining.html",
            controller:"loginingCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/loginingCtrl.js"]});
            }]}
        })
        .state("index.register",{
            url:"/register",
            templateUrl:"views/register.html",
            controller:"registerCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/registerCtrl.js","styles/register.css"]});
            }]}
        })
        .state("index.agendaMaker",{
            url:"/agendaMaker",
            templateUrl:"views/agendaMaker.html",
            controller:"agendaMakerCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaMakerCtrl.js","styles/agendaMaker.css"]});
            }]}
        })
        .state("index.agendaMaker.agendaMakeStep_1",{
            url:"/agendaMakeStep_1",
            templateUrl:"views/agendaMakeStep_1.html",
            controller:"agendaMakeStep_1Ctrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaMakeStep_1Ctrl.js","styles/agendaMakeStep_1.css"]});
            }]}
        })
        .state("index.agendaMaker.travelnotes",{
            url:"/travelnotes",
            templateUrl:"views/travelnotes.html",
            controller:"travelnotesCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/travelnotesCtrl.js"]});
            }]}
        })
        .state("index.agendaMaker.agendaMakeStep_1.agendaMakerStep_2",{
            url:"/agendaMakeStep_2",
            templateUrl:"views/agendaMakeStep_2.html",
            controller:"agendaMakeStep_2Ctrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaMakeStep_2Ctrl.js"]});
            }]}
        })
        .state("index.agendaDetails",{
            url:"/agendaDetails",
            templateUrl:"views/agendaDetails.html",
            controller:"agendaDetailsCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaDetailsCtrl.js","styles/agendaDetails.css"]});
            }]}
        })
        .state("index.myCollection",{
            url:"/myCollection",
            templateUrl:"views/myCollection.html",
            controller:"myCollectionCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/myCollectionCtrl.js","styles/myCollection.css"]})
            }]
            }
        })
        .state("index.presonalCenter",{
            url:"/presonalCenter",
            templateUrl:"views/presonalCenter.html",
            controller:"presonalCenterCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/presonalCenterCtrl.js","styles/presonalCenter.css"]})
            }]
            }
        })
        .state("index.personalCreatedAgenda",{
            url:"/personalCreatedAgenda",
            templateUrl:"views/personalCreatedAgenda.html",
            controller:"personalCreatedAgendaCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/personalCreatedAgendaCtrl.js"]})
            }]
            }
        })
        .state("index.personalCreatedAgenda.independentMake",{
            url:"/independentMake",
            templateUrl:"views/independentMake.html",
            controller:"independentMakeCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/independentMakeCtrl.js"]})
            }]
            }
        })

});
app.animation('.view-slide-in', function () {
    return {
        enter: function(element, done) {
            element.css({
                position: "relative",
                top:300,
                opacity: 0

            })
                .animate({
                    top: 0,
                    left: 0,
                    opacity: 1
                }, 700, done);
        }
    };
});
app.animation('.view-in', function () {
    return {
        enter: function(element, done) {
            element.css({
                position: "relative",
                left:500,
                opacity: 0
            })
                .animate({
                    left: 0,
                    opacity: 1
                }, 200, done);
        }
    };
});


