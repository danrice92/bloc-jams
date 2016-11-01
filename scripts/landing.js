var title = document.getElementsByClassName('hero-title');
var points = document.getElementsByClassName('point');

var animateTitle = function(title) {
    title[0].style.opacity = 1;
    title[0].style.fontSize = "4rem";
};

var animatePoints = function(points) {
    var revealPoint = function() {
        for (p = 0; p < points.length; p++) {
            points[p].style.opacity = 1;
            points[p].style.transform = "scaleX(1) translateY(0)";
            points[p].style.msTransform = "scaleX(1) translateY(0)";
            points[p].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
    };
    revealPoint();
};

window.onload = function() {
    
    animateTitle(title);
    
    if (window.innerHeight > 950) {
        animatePoints(points);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(points);
        }
    });
}