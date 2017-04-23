 (function () {
     function ChatCtrl(Room) {
         this.rooms = Room.all;


         $scope.setRoom = function (rooms, $index) {
             $scope.currentRoom = rooms[$index];
             $scope.messages = Message.getByRoomId($scope.currentRoom.$id);

         };
     }

     angular
         .module('blocChat')
         .controller('ChatCtrl', ['Room','Messages','$scope' ChatCtrl]);
 })();
