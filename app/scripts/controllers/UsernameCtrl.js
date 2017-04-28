(function() {
    function CookiesInstanceCtrl($uibModalInstance,$scope) {
        
       $scope.accept = function(isValid) {
            if (isValid) {
                $uibModalInstance.close($scope.username);
                
            }
             
        
           
            
        };
    }
    
    angular
        .module('blocChat')
        .controller('CookiesInstanceCtrl', ['$uibModalInstance','$scope', CookiesInstanceCtrl]);
})();