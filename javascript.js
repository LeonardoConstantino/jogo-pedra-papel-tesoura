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



var jog = 3
var maq = 3

if(jog == 1){
    if(maq == 1){
        console.log('empate')
    }else if(maq == 2){
        console.log('derrota')
    }else{
        console.log('vitoria')
    }
}else if(jog == 2){
    if(maq == 1){
        console.log('vitoria')
    }else if(maq == 2){
        console.log('empate')
    }else{
        console.log('derrota')
    }
}else{
    if(maq == 1){
        console.log('derrota')
    }else if(maq == 2){
        console.log('vitoria')
    }else{
        console.log('empate')
    }
}