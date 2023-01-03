function tocaSomPom(idAudioElemento){
    document.querySelector(idAudioElemento).play();
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){
    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(teclas);

    //console.log(instrumento);

    listaDeTeclas[contador].onclick = () => {
        tocaSomPom(idAudio);
    } 
    
    contador = contador + 1;

    //console.log(contador);
}