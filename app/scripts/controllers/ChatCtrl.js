(function () {
     function ChatCtrl(Room, Message, $scope) {
         
         rooms = Room.all;
         rooms.$loaded().then(function(rooms) {
            var key1 = 1;
            room = rooms.$getRecord(key1);
             
             $scope.currentRoom = room;
             $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
         });
         
         this.rooms = rooms;
         this.setRoom = function (room) {
             $scope.currentRoom = room;
             $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
         };
         
         this.send =Message.send;
     }

     angular
         .module('blocChat')
         .controller('ChatCtrl', ['Room','Message','$scope', ChatCtrl]);
 })(); 
