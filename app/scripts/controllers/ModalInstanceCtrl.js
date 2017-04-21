(function() {
    function ModalInstanceCtrl($uibModalInstance) {
       this.accept = function() {
            this.room = {$index : name };
            $uibModalInstance.close(this.name);
        };
      
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();