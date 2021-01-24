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
var maojogadorpedra = document.querySelectorAll('.jog')[0]
var maojogadorpapel = document.querySelectorAll('.jog')[1]
var maojogadortesoura = document.querySelectorAll('.jog')[2]
var maomaquina = document.querySelectorAll('.maq')
var maomaquinatesoura = document.querySelectorAll('.maq')[0]
var maomaquinapapel = document.querySelectorAll('.maq')[1]
var maomaquinapedra = document.querySelectorAll('.maq')[2]
var res = document.getElementById('res')
var njogo = document.getElementById('njogo')
var mj = document.getElementById('mj')
var melhorD3Jogador = document.getElementById('jml3')
var placarGeralJogador = document.getElementById('jplag')
var melhorD3Maquina = document.getElementById('mml3')
var placarGeralMaquina = document.getElementById('mplag')
var resMelhorDe3Jogador = document.querySelectorAll('#jml3 .strong').length
var resMelhorDe3Maquina = document.querySelectorAll('#mml3 .strong').length
var resPlacarGeralJogador = 0
var resPlacarGeralMaquina = 0
var jog
var maq

function zerar() {
    mj.setAttribute('class', 'clik')
    maojogador[0].style.display = 'inline'
    maojogador[1].style.display = 'inline'
    maojogador[2].style.display = 'inline'
    res.innerHTML = ''
    maomaquina[0].style.display = 'inline'
    maomaquina[1].style.display = 'inline'
    maomaquina[2].style.display = 'inline'
    res.style.visibility = 'hidden'
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

function atualizarPlacar() {
    if (resMelhorDe3Jogador == 2) {
        resPlacarGeralJogador++
        placarGeralJogador.innerHTML = `${resPlacarGeralJogador}`
        melhorD3Jogador.innerHTML = ''
        melhorD3Maquina.innerHTML = ''
        resMelhorDe3Jogador = 0
        resMelhorDe3Maquina = 0

    } else {
        resMelhorDe3Jogador++
        var m3 = document.createElement("STRong")
        m3.innerHTML = "I"
        melhorD3Jogador.appendChild(m3)
    }
}

function atualizarPlacar1() {
    if (resMelhorDe3Maquina == 2) {
        resPlacarGeralMaquina++
        placarGeralMaquina.innerHTML = `${resPlacarGeralMaquina}`
        melhorD3Maquina.innerHTML = ''
        melhorD3Jogador.innerHTML = ''
        resMelhorDe3Maquina = 0
        resMelhorDe3Jogador = 0

    } else {
        resMelhorDe3Maquina++
        var m3 = document.createElement("STRong")
        m3.innerHTML = "I"
        melhorD3Maquina.appendChild(m3)
    }
}

function stiloganhar() {
    res.innerHTML = '<STRong>VOCÊ GANHOU</STRong>'
    res.style.visibility = 'visible'
    res.style.color = '#4CAF50'
}

function stiloempata() {
    res.innerHTML = '<STRong>EMPATOU</STRong>'
    res.style.visibility = 'visible'
    res.style.color = '#2196F3'
}

function stiloperde() {
    res.innerHTML = '<STRong>VOCÊ PERDEU</STRong>'
    res.style.visibility = 'visible'
    res.style.color = '#f44336'
}

function mostrapedrajogador() {
    maojogadorpapel.style.display = 'none'
    maojogadortesoura.style.display = 'none'
}

function mostrapapeljogador() {
    maojogadorpedra.style.display = 'none'
    maojogadortesoura.style.display = 'none'
}

function mostratesourajogador() {
    maojogadorpapel.style.display = 'none'
    maojogadorpedra.style.display = 'none'
}

function mostrarpedramaquina() {
    maomaquinatesoura.style.display = 'none'
    maomaquinapapel.style.display = 'none'
}

function mostrarpapelmaquina() {
    maomaquinatesoura.style.display = 'none'
    maomaquinapedra.style.display = 'none'
}

function mostrartesouramaquina() {
    maomaquinapedra.style.display = 'none'
    maomaquinapapel.style.display = 'none'
}

function ganhador() {
    reset()
    jogmaq()

    if (jog == 1) {
        if (maq == 1) {
            mj.setAttribute('class', 'naoclik')
            mostrapedrajogador()
            mostrarpedramaquina()
            stiloempata()

        } else if (maq == 2) {
            mj.setAttribute('class', 'naoclik')
            mostrapedrajogador()
            mostrarpapelmaquina()
            stiloperde()
            atualizarPlacar1()

        } else {
            mj.setAttribute('class', 'naoclik')
            mostrapedrajogador()
            mostrartesouramaquina()
            stiloganhar()
            atualizarPlacar()
        }

    } else if (jog == 2) {
        if (maq == 1) {
            mj.setAttribute('class', 'naoclik')
            mostrapapeljogador()
            mostrarpedramaquina()
            stiloganhar()
            atualizarPlacar()

        } else if (maq == 2) {
            mj.setAttribute('class', 'naoclik')
            mostrapapeljogador()
            mostrarpapelmaquina()
            stiloempata()

        } else {
            mj.setAttribute('class', 'naoclik')
            mostrapapeljogador()
            mostrartesouramaquina()
            stiloperde()
            atualizarPlacar1()
        }

    } else {
        if (maq == 1) {
            mj.setAttribute('class', 'naoclik')
            mostratesourajogador()
            mostrarpedramaquina()
            stiloperde()
            atualizarPlacar1()

        } else if (maq == 2) {
            mj.setAttribute('class', 'naoclik')
            mostratesourajogador()
            mostrarpapelmaquina()
            stiloganhar()
            atualizarPlacar()

        } else {
            mj.setAttribute('class', 'naoclik')
            mostratesourajogador()
            mostrartesouramaquina()
            stiloempata()
        }
    }
}