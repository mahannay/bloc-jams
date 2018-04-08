 var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function() {
   var revealPoint = function() {
       $(this).css({
           opacity: 1,
           transform: 'scaleX(1) translateY(0)'
       });
   };
   $.each($('.point'), revealPoint);
   };

var animateHeader = function() {

  var header = document.getElementsByClassName('hero-title');

  var getBigger = function() {
    header[0].style.fontWeight = "600";
  }
  getBigger();
}

$(window).load(function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
  if ($(window).height() > 950) {
      animatePoints();
    }
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

     $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
     });
 });
