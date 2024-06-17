function playSound(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element != null && element.localName === 'audio'){
            element.play();
    } else {
        console.log("Unfinded");
    }
}

const keyList = document.querySelectorAll('.tecla');


for (let counter = 0; counter < keyList.length; counter++) {
    const keyS = keyList[counter];
    const drums = keyS.classList[1];

    const idAudio = `#som_${drums}`;
     //console.log(idAudio);

    keyS.onclick = function () {
        playSound(idAudio);
    }

    keyS.onkeydown = function (event){

        if (event.code === 'Space' || event.code === 'Enter'){
            keyS.keyList.add('ativa');
        }

    }

    keyS.onkeyup = function (){
        keyS.keyList.remove('ativa');
    }
}