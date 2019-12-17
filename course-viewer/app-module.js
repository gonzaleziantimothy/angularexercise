(function() {
    'use strict';

    var appModule = angular.module('courseViewer', ['ui.router']); 

    appModule.value('componentBorders', true);

    appModule.run(function (componentBorders) {
        if (componentBorders) {
            if (appModule._invokeQueue) {
                appModule._invokeQueue.forEach(function (item) {
                    if (item[1] == 'component') {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template = '<div class="component-borders"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                        }
                        else {
                            var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }
    });

    appModule.config( function($stateProvider){
            var states = [
                {
                    name: 'home',
                    url: '/',
                    template: '<home></home>'
                }, 
                {
                    name: 'home2',
                    url: '',
                    template: '<home></home>'
                },
                {
                    name: 'courses',
                    url: '/courses',
                    template: '<course-list></course-list>'
                },
                {
                    name: 'authors',
                    url: '/authors',
                    template: '<author-list></author-list>'
                }
            ] 

           states.forEach( function (state){
                $stateProvider.state(state)
           }); 
    });
    
})();