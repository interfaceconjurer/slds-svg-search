"use strict";angular.module("sldsSVG",["ngAnimate","ngSanitize","ngTouch","ui.router","smoothScroll"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("frame",{abstract:!0,url:"/",controller:"FrameCtrl",templateUrl:"views/frame.html"}).state("navigation",{abstract:!0,parent:"frame",templateUrl:"views/navigation.html"}).state("home",{url:"",parent:"frame",templateUrl:"views/main.html",controller:"MainCtrl"}).state("about",{url:"about",parent:"frame",templateUrl:"views/about.html"})}]).run(["$rootScope",function(a){a.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}]),angular.module("sldsSVG").directive("scrollPosition",["$window",function(a){return{scope:{scroll:"=scrollPosition"},link:function(b){var c=angular.element(a),d=function(){b.scroll=c.scrollTop()};c.on("scroll",b.$apply.bind(b,d)),d()}}}]),angular.module("sldsSVG").controller("FrameCtrl",["$state","$scope",function(a,b){b.$state=a}]),angular.module("sldsSVG").controller("MainCtrl",["$scope","$location","$anchorScroll","$state","$http",function(a,b,c,d,e){a.svgCustoms=[],a.svgActions=[],a.svgDoctypes=[],a.svgStandards=[],a.svgUtils=[],a.categories=!1,a.showCategories=function(){a.categories=!0},a.state=d,a.scroll=0,a.gotoTop=function(){b.hash("top"),c()},e.get("/scripts/json/custom.json").then(function(b){a.svgCustoms=b.data}),e.get("/scripts/json/action.json").then(function(b){a.svgActions=b.data}),e.get("/scripts/json/doctype.json").then(function(b){a.svgDoctypes=b.data}),e.get("/scripts/json/standard.json").then(function(b){a.svgStandards=b.data}),e.get("/scripts/json/utility.json").then(function(b){a.svgUtils=b.data})}]);