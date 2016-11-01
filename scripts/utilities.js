function forEach(array) {
    for (p = 0; p < array.length; p++) {
            array[p].style.opacity = 1;
            array[p].style.transform = "scaleX(1) translateY(0)";
            array[p].style.msTransform = "scaleX(1) translateY(0)";
            array[p].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
}