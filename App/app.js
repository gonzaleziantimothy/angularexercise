(function (){
    'use strict';

    var appModule = angular.module('app', ['ngRoute']);

    appModule.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/App/SimpleExampleView.html',
            controller: 'simpleExampleViewModel', 
            controllerAs: 'vm'
        });
    });
    appModule.controller('simpleExampleViewModel', function(){

        var vm = this;

        vm.name = {
            first: '',
            last: ''
        };

        vm.fullName = '';

        vm.submit = function () {
            vm.fullName = vm.name.first + ' ' + vm.name.last;
        }
    })
})();

 