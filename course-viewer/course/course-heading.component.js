(function () {
    'use strict';

    angular.module('courseViewer').component('courseHeading', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
        },

        templateUrl: 'course-viewer/course/course-heading.component.html'
    });
    
})();