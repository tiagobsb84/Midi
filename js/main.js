function tocaSom(seletoresAudio){
    const elemento = document.querySelector(seletoresAudio);

    if(elemento != null && elemento.localName == 'audio') {
            elemento.play(); 
    } else {
        console.log('Elemento não existe ou seletor inválido');
    }

}

const listaDeTeclas =  document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = () => {
        tocaSom(idAudio);
    } 

    teclas.onkeydown = (evento) => {
        console.log(evento.code);

        if(evento.code == 'Space' || evento.code == 'Enter'){
            teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = () => {
        teclas.classList.remove('ativa');
    }

}
