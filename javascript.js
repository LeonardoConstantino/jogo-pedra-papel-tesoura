//A logica do jogo vai ser a seguinte: o jogador escolhe 1 valor entre 3 e esse
//valor vai ser comparado com um valor randômico entre 3 esse valores vao ser 
//comparados e um resultado sera apresentado ao jogador vitoria, empate ou
//derrota.
//os valores correspondem a:
//valor 1 = pedra
//valor 2 = papel
//valor 3 = tesoura
//possibilidades de jogadas:
//jogador | randômico | resultado
//1     | 1     | empate
//1     | 2     | derrota
//1     | 3     | vitoria

//2     | 1     | vitoria
//2     | 2     | empate
//2     | 3     | derrota

//3     | 1     | derrota
//3     | 2     | vitoria
//3     | 3     | empate

var maojogador = document.querySelectorAll('.jog')
var maomaquina = document.querySelectorAll('.maq')
var res = document.getElementById('res')
var njogo = document.getElementById('njogo')
var jog
var maq

function zerar() {
    // tjogo.innerHTML = `${njogo}`
    location.reload()
}


function jogmaq() {
    maq = Math.floor(Math.random() * 3) + 1
}

function pedra() {
    jog = 1
    ganhador()
}

function papel() {
    jog = 2
    ganhador()
}

function tesoura() {
    jog = 3
    ganhador()
}


function reset() {
    setTimeout(zerar, 1500)
}

function ganhador() {
    reset()
    jogmaq()

    if (jog == 1) {
        if (maq == 1) {
            maojogador[1].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[1].setAttribute('hidden', '')

            res.innerHTML = '<STRong>EMPATOU</STRong>'
            res.style.color = '#2196F3'
        } else if (maq == 2) {
            maojogador[1].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[2].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ PERDEU</STRong>'
            res.style.color = '#f44336'
        } else {
            maojogador[1].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[2].setAttribute('hidden', '')
            maomaquina[1].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ GANHOU</STRong>'
            res.style.color = '#4CAF50'

        }
    } else if (jog == 2) {
        if (maq == 1) {
            maojogador[0].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[1].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ GANHOU</STRong>'
            res.style.color = '#4CAF50'
        } else if (maq == 2) {
            maojogador[0].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[2].setAttribute('hidden', '')

            res.innerHTML = '<STRong>EMPATOU</STRong>'
            res.style.color = '#2196F3'
        } else {
            maojogador[1].setAttribute('hidden', '')
            maojogador[2].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[2].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ PERDEU</STRong>'
            res.style.color = '#f44336'
        }
    } else {
        if (maq == 1) {
            maojogador[1].setAttribute('hidden', '')
            maojogador[0].setAttribute('hidden', '')

            maomaquina[0].setAttribute('hidden', '')
            maomaquina[1].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ PERDEU</STRong>'
            res.style.color = '#f44336'
        } else if (maq == 2) {
            maojogador[0].setAttribute('hidden', '')
            maojogador[1].setAttribute('hidden', '')

            maomaquina[2].setAttribute('hidden', '')
            maomaquina[0].setAttribute('hidden', '')

            res.innerHTML = '<STRong>VOCÊ GANHOU</STRong>'
            res.style.color = '#4CAF50'
        } else {
            maojogador[1].setAttribute('hidden', '')
            maojogador[0].setAttribute('hidden', '')

            maomaquina[2].setAttribute('hidden', '')
            maomaquina[1].setAttribute('hidden', '')

            res.innerHTML = '<STRong>EMPATOU</STRong>'
            res.style.color = '#2196F3'
        }
    }

}