define([], function() {
    "use strict";
    var directive = function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'views/templates/treeView.html',
            scope: {
                treeData: '=',
                canChecked: '=',
                textField: '@',
                valueChildren: '@',
                itemClicked: '&',
                itemCheckedChanged: '&',
                itemTemplateUrl: '@'
            },
            link: function(scope, element, attr) {
                var fn = {

                }

                // scope.itemExpended = function(item, $event) {
                //     item.$$isExpend = !item.$$isExpend;
                //     $event.stopPropagation();
                // };


                scope.getItemIcon = function(item) {
                    var isLeaf = scope.isLeaf(item);

                    if (!isLeaf) {
                        return 'icon bgColorGreen';
                    }

                    // return item.$$isExpend ? 'icon bgColorGreen' : 'icon bgColorYellow';
                };

                scope.isLeaf = function(item) {
                    return !item.children || !item.children.length;
                };

                scope.warpCallback = function(callback, item, $event) {
                    // 点击的是li
                    if (callback == "itemClicked") {
                        // 当点击li时设置input框的状态
                        item.$$isChecked = !item.$$isChecked;
                        // 展开有子li的
                        if (!scope.isLeaf(item)) {
                            item.$$isExpend = !item.$$isExpend;
                            return;
                        }
                    }
                    //点击的是li前面的input框
                    if (callback == "itemCheckedChanged") {
                        // 展开有子li的
                        if (!scope.isLeaf(item)) {
                            item.$$isExpend = !item.$$isExpend;
                        }
                    }


                    (scope[callback] || angular.noop)({
                        $item: item,
                        $event: $event
                    });
                };
            }
        };
    };


    return {
        name: "treeView",
        directive: directive,
    }
});