define([], function() {
    "use strict";

    var ctrl = ["$scope", "demoService", '$http', function($scope, demoService, $http) {
        $scope.fn = {
            onRenderFinish: function() {
                $scope.demo.update();
            }
        };

        $scope.demo = {
            data: {
                value: 0
            },
            update: function() {
                var demo = this;
                demoService.getData().then(function(result) {
                    demo.data = result;
                });
            }
        }



        $scope.vm = {
            tree: [{
                    "id": "1",
                    "pid": "0",
                    "name": "家用电器",
                    "children": [{
                            "id": "4",
                            "pid": "1",
                            "name": "家用电器-大家电",
                            "children": [{
                                    "id": "7",
                                    "pid": "4",
                                    "name": "家用电器-大家电-空调",
                                    "children": [{
                                            "id": "15",
                                            "pid": "7",
                                            "name": "家用电器-大家电-空调-海尔空调",
                                        },
                                        {
                                            "id": "16",
                                            "pid": "7",
                                            "name": "家用电器-大家电-空调-美的空调"
                                        }
                                    ]
                                },
                                {
                                    "id": "8",
                                    "pid": "4",
                                    "name": "家用电器-大家电-冰箱"
                                },
                                {
                                    "id": "9",
                                    "pid": "4",
                                    "name": "家用电器-大家电-洗衣机"
                                },
                                {
                                    "id": "10",
                                    "pid": "4",
                                    "name": "家用电器-大家电-热水器"
                                }
                            ]
                        },
                        {
                            "id": "5",
                            "pid": "1",
                            "name": "家用电器-生活电器",
                            "children": [{
                                    "id": "19",
                                    "pid": "5",
                                    "name": "家用电器-生活电器-加湿器"
                                },
                                {
                                    "id": "20",
                                    "pid": "5",
                                    "name": "家用电器-生活电器-电熨斗"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "2",
                    "pid": "0",
                    "name": "服饰",
                    "children": [{
                            "id": "13",
                            "pid": "2",
                            "name": "服饰-男装"
                        },
                        {
                            "id": "14",
                            "pid": "2",
                            "name": "服饰-女装"
                        }
                    ]
                },
                {
                    "id": "3",
                    "pid": "0",
                    "name": "化妆",
                    "children": [{
                            "id": "11",
                            "pid": "3",
                            "name": "化妆-面部护理"
                        },
                        {
                            "id": "12",
                            "pid": "3",
                            "name": "化妆-口腔护理"
                        }
                    ]
                }
            ],

            itemClicked: function($item) {
                var vm = this;
                vm.selectedItem = $item;

                console.log($item, 'itemClicked');
            },
            itemCheckedChanged: function($item) {
                var vm = this;
                // $http.post('/url', $item);
                console.log($item, 'itemCheckedChanged');
            },
        }
    }];

    var app = angular.module("myApp");
    app.controller("router1Ctrl", ctrl);
});