var cartaRengar = {
    nome: "Rengar",
    image: "../img/banco/lol/rengar.gif",
    atributos: {
        DanoFísico: 409,
        PoderMágico: 20,
        Armadura: 70
    }
}

var cartaVolibear = {
    nome: "Volibear",
    image: "../img/banco/lol/volibear.gif",
    atributos: {
        DanoFísico: 301,
        PoderMágico: 40,
        Armadura: 210
    }
}

var cartaLucian = {
    nome: "Lucian",
    image: "../img/banco/lol/lucian.gif",
    atributos: {
        DanoFísico: 480,
        PoderMágico: 0,
        Armadura: 35
    }
}

var cartaZed = {
    nome: "Zed",
    image: "../img/banco/lol/zed.gif",
    atributos: {
        DanoFísico: 510,
        PoderMágico: 10,
        Armadura: 40
    }
}

var cartaLulu = {
    nome: "Lulu",
    image: "../img/banco/lol/lulu.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 80,
        Armadura: 65
    }
}

var cartaEkko = {
    nome: "Ekko",
    image: "../img/banco/lol/ekko.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 410,
        Armadura: 69
    }
}

var cartaKayn = {
    nome: "Kayn",
    image: "../img/banco/lol/caim.gif",
    atributos: {
        DanoFísico: 310,
        PoderMágico: 10,
        Armadura: 80
    }
}

var cartaKennen = {
    nome: "Kennen",
    image: "../img/banco/lol/kenem.gif",
    atributos: {
        DanoFísico: 50,
        PoderMágico: 239,
        Armadura: 45
    }
}

var cartaKindred = {
    nome: "Kindred",
    image: "../img/banco/lol/kindred.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 25
    }
}

var cartaYone = {
    nome: "Yone",
    image: "../img/banco/lol/yone.jpg",
    atributos: {
        DanoFísico: 420,
        PoderMágico: 32,
        Armadura: 62
    }
}

var cartaYasuo = {
    nome: "Yasuo",
    image: "../img/banco/lol/yasuo.gif",
    atributos: {
        DanoFísico: 415,
        PoderMágico: 13,
        Armadura: 60
    }
}

var cartaRekSai = {
    nome: "Rek'sai",
    image: "../img/banco/lol/rek.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 75
    }
}

var cartaSuperTrunfo = {
    nome: "Teemo",
    image: "../img/banco/lol/timo.gif",
    atributos: {
        DanoFísico: 1000,
        PoderMágico: 1000,
        Armadura: 1000
    }
}

var cartaAkali = {
    nome: "Akali",
    image: "../img/banco/lol/akali.gif",
    atributos: {
        DanoFísico: 120,
        PoderMágico: 312,
        Armadura: 35
    }
}

var cartaJogador
var cartaMaquina
var rodada = 0
var cartas = [
    cartaRengar,
    cartaVolibear,
    cartaLucian,
    cartaZed,
    cartaLulu,
    cartaEkko,
    cartaKayn,
    cartaKennen,
    cartaKindred,
    cartaYone,
    cartaYasuo,
    cartaRekSai,
    cartaSuperTrunfo,
    cartaAkali
]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('container-placar').style.display = 'none' 
function hideBtn() {
    document.getElementById('div-btn-sortear').style.display = 'none' 
}
function hidePlacar() {
    document.getElementById('container-placar').style.display = 'none' 
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document
        .getElementById('btnSortear')
        .disabled = true
    document
        .getElementById('btnJogar')
        .disabled = false

    hideBtn()
    hidePlacar()
    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="../img/logos/moldura.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +
                atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id = 'opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    if (rodada % 2 != 0) {
        for (var i = 0; i < radioAtributo.length; i++) {
            if (radioAtributo[i].checked) {
                return radioAtributo[i].value
            }
        }
    } else {
        var atributoia = ['DanoFísico', 'PoderMágico', 'Armadura']
        var ia = parseInt(Math.random() * 3)
        radioAtributo = atributoia[ia]
        return radioAtributo
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showPlacar() {
    document.getElementById('container-placar').style.display = 'block' 
}


function jogar() {
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()
    var atributoMaquina = document.getElementById("atributoEscolhidoMaquina")

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você Venceu!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Você Perdeu!</p>'
        pontosMaquina++

    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<div class="aboveall"><p class="resultado-final">Venceu</p></div>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<div class="aboveall"><p class="resultado-final">Perdeu</p></div>'
        } else {
            htmlResultado = '<div class="aboveall"><p class="resultado-final">Empatou</p></div>'
        }
    } else {
        document
            .getElementById('btnProximaRodada')
            .disabled = false
    }

    if (rodada % 2 == 0) {
        atributoMaquina.innerHTML = atributoSelecionado
    }

    divResultado.innerHTML = htmlResultado
    document
        .getElementById('btnJogar')
        .disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
    showPlacar()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="../img/logos/moldura.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +
                cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showBtn() {
    document.getElementById('div-btn-sortear').style.display = 'block' 
}


function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id ="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document
        .getElementById('btnSortear')
        .disabled = false
    document
        .getElementById('btnJogar')
        .disabled = true
    document
        .getElementById('btnProximaRodada')
        .disabled = true
    showBtn()
    var divResultado = document.getElementById('resultado')

    divResultado.innerHTML = ""

    
}


//

