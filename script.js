var contenido = document.getElementById("mycontent")

var piezas = contenido.innerHTML.split('')

const colores = [
    "#264653",
    "#2a9d8f",
    "#e9c46a",
    "#f4a261",
    "#e76f51"
];

for (let index = 0; index < piezas.length; index++) {
    if (piezas[index] != ' ') 
        piezas[index] = '<span style="color:'+ colores[parseInt(Math.random()*4+1)] +';" class="caracter">'+piezas[index]+'</span>'
}

contenido.innerHTML = piezas.join('')

var piezashtml = document.querySelectorAll('.caracter');

piezashtml.forEach(pieza => {
    pieza.addEventListener('click', () => {
        randomAngle = (Math.random()*61-30);
        pieza.style.transition = "transform .2s ease-in"
        pieza.style.transform = "scale(1.1) translate(10px, -40px) rotateZ("+randomAngle+"deg)";
        setTimeout(() => {
            pieza.style.transform = "scale(1.1) translate(12px, calc(25vh - 1em)) rotateZ("+randomAngle+"deg)";
        }, 200);
    })
});