 var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function(pointsArray) {

    forEach(pointsArray,function() {
      pointsArray[i].style.opacity = 1;
      pointsArray[i].style.transform = "scaleX(1) translateY(0)";
      pointsArray[i].style.msTransform = "scaleX(1) translateY(0)";
      pointsArray[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    });

  };

var animateHeader = function() {

  var header = document.getElementsByClassName('hero-title');

  var getBigger = function() {
    header[0].style.fontWeight = "600";
  }
  getBigger();
}

window.onload = function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
         console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }
     });
 }
