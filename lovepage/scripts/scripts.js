var imagen = document.getElementById("imagen");
var mensaje = document.getElementById("message");

document.getElementById("si").addEventListener("click", function () {
    mensaje.innerHTML = "Oleeeee ♥️♥️♥️♥️";
    imagen.style.backgroundImage = "url(./resources/love.gif)";
    document.getElementById("no").disabled = true;
});

document.getElementById("no").addEventListener("click", function () {
    mensaje.innerHTML = "Como que no :((((";
    imagen.style.backgroundImage = "url(./resources/sad-broken-heart.gif)";
    document.getElementById("si").disabled = true;
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

const no = document.getElementById("no");

no.addEventListener("mouseover", crearBarrera, true);

var creada = false;

var barreraNo = document.createElement("div");

function crearBarrera() {
    if (!creada) {
        no.appendChild(barreraNo);
        barreraNo.style.position = "absolute";
        barreraNo.style.width = "150px";
        barreraNo.style.height = "100px";
        barreraNo.style.top = "-105%";
        barreraNo.style.left = "-72%";
        creada = true;
    }
}

barreraNo.addEventListener("mouseover", () => {
    if (!no.disabled) {
        no.style.transform = "scale(0.6) translate(" + random(800) + "px, " + random(300) + "px)";
        no.style.backgroundColor = 'rgb(244, 166, 180)';
        no.style.color = 'white';
        no.style.fontWeight = '700';
    }
});

barreraNo.addEventListener("mouseout", () => {
    no.style.backgroundColor = '';
    no.style.color = '';
    no.style.fontWeight = '';
});

document.getElementById("si").addEventListener('mouseover', () => {
    if (!document.getElementById("si").disabled) {
        document.getElementById("si").style.backgroundColor = 'rgb(244, 166, 180)';
        document.getElementById("si").style.color = 'white';
        document.getElementById("si").style.fontWeight = '700';
        document.getElementById("si").style.transform = 'scale(1.5)';
    }
});

document.getElementById("si").addEventListener('mouseout', function() {
    if (!this.disabled) {
        document.getElementById("si").style.backgroundColor = '';
        document.getElementById("si").style.color = '';
        document.getElementById("si").style.fontWeight = '';
        document.getElementById("si").style.transform = '';
    }
});