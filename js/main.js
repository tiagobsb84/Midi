function tocaSomPom(idAudioElemento){
    document.querySelector(idAudioElemento).play();
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = () => {
        tocaSomPom(idAudio);
    } 

    teclas.onkeydown = () => {
        teclas.classList.add('ativa');
    }

    teclas.onkeyup = () => {
        teclas.classList.remove('ativa');
    }

}
