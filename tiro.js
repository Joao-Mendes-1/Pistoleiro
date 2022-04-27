
//som
let trilhaSonoraToyStory = document.getElementById('toyStory')
let trilhaSonora = document.getElementById('trilhaSonora')
let somDezPontos = document.getElementById('dezPontos')
let somTiro = document.getElementById('somTiro');
let somTiroFacil = document.getElementById('somFacil')
let easy = false
//dificuldade
   function dificuldadeHard(){
    setInterval(atualizaTela,700)
    document.getElementById('hard').style.display = 'none'
    document.getElementById('medio').style.display = 'none'
    document.getElementById('easy').style.display = 'none'
    trilhaSonora.play()
   }
   function dificuldadeMedio(){
    setInterval(atualizaTela,1000)
    document.getElementById('hard').style.display = 'none'
    document.getElementById('medio').style.display = 'none'
    document.getElementById('easy').style.display = 'none'
    trilhaSonora.play()
                
   }
   function dificuldadeEasy(){
    setInterval(atualizaTela,1200)
    document.getElementById('hard').style.display = 'none'
    document.getElementById('medio').style.display = 'none'
    document.getElementById('easy').style.display = 'none'
    trilhaSonoraToyStory.play()
    easy = true
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
        limpaTela()
        xAleatorio = sorteiaPosicao(1100)
        yAleatorio = sorteiaPosicao(400)
        desenhaAlvo(xAleatorio,yAleatorio,raio)

    }
    function dispara(evento) {
        var x = evento.pageX - tela.offsetLeft
        var y = evento.pageY - tela.offsetTop
        //sons
        if (easy == true) {
            somTiroFacil.play()
        }else{
            somTiro.play()
        }

        //lógica do dispara
        if((x > xAleatorio - raio)
            && (x < xAleatorio + raio)
            && (y > yAleatorio - raio)
            && (y < yAleatorio + raio)) {
                //adicionando numero de pontos
                contarPontos(numeroDePontos)
                numeroDePontos++
                //mundar o fundo do placar
                document.getElementById('pontos').style.background = 'black'
                //chegando a 10 pontos
                if (numeroDePontos >= 11) {
                    somDezPontos.play()
                    numeroDePontos = 0
    
                }
            }
    }
    tela.onclick = dispara
    // seletor de dificuldade button
    let botaoHard = document.getElementById("hard")
    botaoHard.onclick = dificuldadeHard
    let botaoMedio = document.getElementById("medio")
    botaoMedio.onclick = dificuldadeMedio
    let botaoEasy = document.getElementById("easy")
    botaoEasy.onclick = dificuldadeEasy
