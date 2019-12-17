(function () {
    'use strict';

    angular.module('courseViewer').component('courseList', {
        controllerAs: 'vm',
        controller: function() {
            var vm = this;

            vm.$onInit = function () {
                vm.courseId = 200;
            }
        },
        templateUrl: 'course-viewer/course/course-list.component.html'
    });
    
})();