 (function () {
     function ModalCtrl(Room, $log, $uibModal) {
         this.open = function () {
             var modalInstance = $uibModal.open({
                 animation: this.animationsEnabled,
                 templateUrl: '/templates/modal.html',
                 controller: 'ModalInstanceCtrl',
                 controllerAs: 'modal'

             });

             modalInstance.result.then(function (name) {
                 this.room = name;
                 Room.create(this.room);
             }, function () {
                 $log.info('Modal closed at ' + new Date());
             });
         };

     }


     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$log', '$uibModal', ModalCtrl]);
 })();
