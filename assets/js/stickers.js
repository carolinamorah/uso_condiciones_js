function sumarStickers(){
    var stickerUno = document.querySelector("#input1").value;
    var stickerDos = document.querySelector("#input2").value;
    var stickerTres = document.querySelector("#input3").value;
    var parrafo = document.querySelector("#mensaje");

    valorTotal = parseInt(stickerUno) + parseInt(stickerDos) + parseInt(stickerTres);

    if(valorTotal === 0){
        parrafo.innerHTML = "¡Agrega Stickers!";
    } else if(valorTotal <= 10){
        parrafo.innerHTML = `Llevas ${valorTotal} stickers`;
    } else {
        parrafo.innerHTML = "Llevas demasiados stickers";
    }
}