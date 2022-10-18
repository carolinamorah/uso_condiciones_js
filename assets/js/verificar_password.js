function verificarPassword(){
    let selectorUno = parseInt(document.getElementById("select1").value);
    let selectorDos = parseInt(document.getElementById("select2").value);
    let selectorTres = parseInt(document.getElementById("select3").value);
    let parrafo = document.getElementById("texto");

    if(selectorUno === 9 && selectorDos === 1 && selectorTres === 1){
        parrafo.textContent = "password 1 correcto";
    } else if(selectorUno === 7 && selectorDos === 1 && selectorTres === 4){
        parrafo.textContent = "password 2 correcto";
    } else {
        parrafo.textContent = "password incorrecto";
    }
}