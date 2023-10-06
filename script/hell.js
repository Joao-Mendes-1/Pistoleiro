
//som
let musicaVitoria = document.getElementById('musicaVitoria')
let trilhaSonoraHell = document.getElementById('trilhaSonoraHell')
let somTiro = document.getElementById('somTiro');

function tocarMusica(){
    trilhaSonoraHell.loop=true
    trilhaSonoraHell.play()    
}

//hell
    
tocarMusica()
document.getElementById('tela').style.background= "url('../style/imagens/fundo_canva_hell.jpg')"               
let myInterval =setInterval(atualizaTela,700)    

//quando chegar a 10 pontos no modo hell vitoria
function vitoria() {
    document.getElementById('fundo_total').style.background= "dimgrey"
    document.getElementById("titulo").innerHTML= "YOU WIN"
    document.getElementById("rodape").style.display= "block"
    document.getElementById("titulo").style.color= "#F5DEB3"
    document.getElementById("numeroDePontos").style.display = "none"
    somTiro.muted= true
    clearInterval(myInterval)
    limpaTela()
    trilhaSonoraHell.pause()
    musicaVitoria.play()
    document.getElementById('tela').style.background= "url('../style/imagens/fundo_vitoria.jpg')"
}



//contador de pontos
let numeroDePontos = 1
function contarPontos(numeroDePontos){
    let divPontos = document.getElementById('pontos')
    divPontos.innerHTML = numeroDePontos
}

//Procedimento de tiro ao alvo
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillRect(0, 0, 1100, 400);
let xAleatorio = sorteiaPosicao(1100)
let yAleatorio = sorteiaPosicao(400)
let raio = 10

function desenhaCirculo(x, y, raio,cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 1100, 400);
}
function sorteiaPosicao(max){
    return Math.floor(Math.random() * max)
}
function desenhaAlvo(x,y,raio){
    desenhaCirculo(x,y,40,'red')
    desenhaCirculo(x,y,25,'white')
    desenhaCirculo(x,y,10,'red')
}
function atualizaTela() {
    tocarMusica()
    limpaTela()
    xAleatorio = sorteiaPosicao(1100)
    yAleatorio = sorteiaPosicao(400)
    desenhaAlvo(xAleatorio,yAleatorio,raio)
}

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft
    var y = evento.pageY - tela.offsetTop
    //sons de tiro
    if (true) {
        somTiro.play()
        somTiro.volume = 0.4
    }

//lógica do dispara
if((x > xAleatorio - raio)
    && (x < xAleatorio + raio)
    && (y > yAleatorio - raio)
    && (y < yAleatorio + raio)) {
    //adicionando numero de pontos
        contarPontos(numeroDePontos)
        numeroDePontos++
        //mudar o fundo do placar
        document.getElementById('pontos').style.background = 'black'
        //chegando a 10 pontos
        if (numeroDePontos >= 11) {
                vitoria()   
            }
        }
    }
    tela.onclick = dispara
