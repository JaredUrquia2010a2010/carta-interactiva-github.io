function abrirCarta(carta){
    carta.classList.toggle("abierta");
}

function reproducirMusica(event){
    event.stopPropagation();
    document.getElementById("musica").play();
}

