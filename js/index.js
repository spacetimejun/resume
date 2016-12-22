// 注意第二个参数，在数组里有一个 'ngRoute'，表示我们需要在 app 模块里使用 ngRoute 模块
var app = angular.module('myApp', ['ngRoute']);
// config() 方法用来对模块进行配置 
// $routeProvider 是 ngRoute 内定义的对象，需要用它来对路由进行配置
app.config(function ($routeProvider) {
// 配置路由
// when() 方法的意思是：当路由导航到第一个参数的地址时，就启用第二个参数的配置。
// 在这个示例里第二个参数只配置了模板的内容（template），即使用模板替换掉 ng-view 的内容
	$routeProvider
		.when('/one', {
			templateUrl: 'template/one.html'
		})
		.when('/two', {
			templateUrl: 'template/two.html'
		})
		.when('/three', {
			templateUrl: 'template/three.html'
		})
		.when('/four', {
			templateUrl: 'template/four.html',
			controller:function($scope,$http){
				$http.get('js/index.json').success(function (result) {
		        	$scope.list = result;
		        	
		        }).error(function (result) {
		        	console.log(result)
		        })
			}
		})
		.when('/five', {
			templateUrl: 'template/five.html'
		})
		.when('/six', {
			templateUrl: 'template/six.html'
		})
		.when('/seven', {
			templateUrl: 'template/seven.html'
		})
		.when('/eight', {
			templateUrl: 'template/eight.html'
		})
		.when('/night', {
			templateUrl: 'template/night.html'
		})
		.otherwise({ // 当以上路由配置都不匹配时，就会使用 otherwise 里的配置
			redirectTo: '/one' 
		});
});
app.controller('controller',function($scope,$http){
	
})
