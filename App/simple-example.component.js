(function (){
    'use strict';

    angular.module('app').component('simpleExample', {
        controllerAs: 'vm', 
        controller: function(){
             var vm = this;

             vm.name = {
                 first: '',
                 last: ''
             };

             vm.fullName = '';

             vm.submit = function(){
                 vm.fullName = vm.name.first + ' ' + vm.name.last;
             }
        },
        templateUrl: 'App/simple-example.component.html'
    });

})();