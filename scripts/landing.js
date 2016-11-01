var animateTitle = function () {
    
    var title = document.getElementsByClassName('hero-title');
    
    var revealTitle = function () {
        title[0].style.opacity = 1;
        title[0].style.fontSize = "4rem";
    };
    
    revealTitle();
};

var animatePoints = function () {
    
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function () {
        for (p = 0; p < points.length; p++) {
            points[p].style.opacity = 1;
            points[p].style.transform = "scaleX(1) translateY(0)";
            points[p].style.msTransform = "scaleX(1) translateY(0)";
            points[p].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
    };
    
    revealPoint();
    
};

animateTitle();

animatePoints();