console.log("PONY POWER!!");

// var ponyPosition = $('#pony').css('margin-left', '1280px');

// function walkingPony() {
//   ponyPosition.animate({
//     marginRight: '-1000px'
//   }, 5000)

// }

// setInterval(walkingPony, 1000)

function walkingPony() {
  var $pony = $('#pony');
  var distance = 1200;
  setInterval(function() {
    $pony.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 10);
};

$(document).ready(function(){
  walkingPony();
})
