define([
    "directives/ngRenderFinish",
    "directives/tree"
], function() {
    "use strict";

    var directiveList = arguments;

    var config = function(app) {
        for (var index = 0; index < directiveList.length; index++) {
            var element = directiveList[index];
            app.directive(element.name, element.directive);
        }
    };

    return config;
});