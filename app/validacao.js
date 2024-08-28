function VerificaSeOChutePossuiUmValorValido(chute) {
    const gameOver = chute
    const numero = +chute

    if(gameOver == "desisto") {
        document.body.style.backgroundColor = "black"
        document.body.innerHTML = `
        <h2>Você desistiu!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Valor inválido</div>'
       return
    }

    if(numeroForMaiorOuMenosQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numero}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenosQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})