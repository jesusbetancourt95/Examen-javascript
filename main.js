const motos = [];

function motoseleccionada() {
    
    let seleccion = document.getElementById("moto").value;

    motos.push(seleccion);

    document.getElementById("compra").innerHTML=motos;
}

function rechazada() {

    motos.shift([0]);

    document.getElementById("compra").innerHTML=motos;
}