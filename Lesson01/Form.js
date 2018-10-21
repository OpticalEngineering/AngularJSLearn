var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',
    function ($scope) {
        $scope.userInfo = {
            email: "123456789@126.com",
            password: "123456789",
            autoLogin: true
        };
        console.log("测试");
        $scope.getFormData = function () {
            console.log($scope.userInfo);
            console.log("测试");
        };
        $scope.setFormData = function () {
            $scope.userInfo = {
                email: "1234567890@126.com",
                password: "1234567890",
                autoLogin: false
            }
        };
        $scope.resetForm = function () {
            $scope.userInfo = {
                email: "123456789@126.com",
                password: "123456789",
                autoLogin: true
            }
        }
    }

])