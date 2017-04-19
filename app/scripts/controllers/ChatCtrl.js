 (function () {
     function ChatCtrl(Room) {
         this.rooms= Room.all;
     }

     angular
         .module('blocChat')
         .controller('ChatCtrl', [ 'Room', ChatCtrl]);
 })();