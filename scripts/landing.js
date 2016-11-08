var title = document.getElementsByClassName('hero-title');
var points = document.getElementsByClassName('point');

var animateTitle = function(title) {
    title[0].style.opacity = 1;
    title[0].style.fontSize = "4rem";
};

var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    $.each($('.point'), revealPoint);
};

$(window).load(function() {
    animateTitle(title);
    
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