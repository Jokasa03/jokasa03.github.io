var colors = ["#4CAF50", "#af4c4c"]

var visible = false;

var visibleSwitch = document.getElementById("visibleSwitch");
var solucion = document.getElementById("solucion");

visibleSwitch.addEventListener("click", function() {
    visible = !visible;
    var color = visible ? colors[0] : colors[1];
    visibleSwitch.style.backgroundColor = color;
    visibleSwitch.children[0].setAttribute("src", visible ? "resources/visible.png" : "resources/notVisible.png");
    solucion.style.filter = visible ? "none" : "blur(5px)";
})