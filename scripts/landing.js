var animatePoints = function() {

  var points = document.getElementsByClassName('point');

  for (i = 0; i > 3; i++) {
    points[i].style.opacity = 1;
    points[i].style.transform = "scaleX(1) translateY(0)";
    points[i].style.msTransform = "scaleX(1) translateY(0)";
    points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
  }

};

var animateHeader = function() {

  var header = document.getElementsByClassName('hero-title');

  var getBigger = function() {
    header[0].style.transform = "scaleX(5) translateY(0)";
  }
  var getSmaller = function() {
    header[0].style.transitiondelay = "2s";
    header[0].style.transform = "scaleX(1) translateY(0)"
  }

  getBigger();
  getSmaller();
}

animatePoints();
animateHeader();
