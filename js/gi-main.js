var cartaCandance = {
    nome: "Candance",
    image: "../img/banco/gi/candace.gif",
    atributos: {
        DanoFísico: 409,
        PoderMágico: 20,
        Armadura: 70
    }
}

var cartaTartaglia = {
    nome: "Tartaglia",
    image: "../img/banco/gi/childe.gif",
    atributos: {
        DanoFísico: 301,
        PoderMágico: 40,
        Armadura: 210
    }
}

var cartaChongyun = {
    nome: "Chongyun",
    image: "../img/banco/gi/chongyun.gif",
    atributos: {
        DanoFísico: 480,
        PoderMágico: 0,
        Armadura: 35
    }
}

var cartaCyno = {
    nome: "Cyno",
    image: "../img/banco/gi/cyno2.gif",
    atributos: {
        DanoFísico: 510,
        PoderMágico: 10,
        Armadura: 40
    }
}

var cartaDiona = {
    nome: "Diona",
    image: "../img/banco/gi/diona.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 80,
        Armadura: 65
    }
}

var cartaItto = {
    nome: "Itto",
    image: "../img/banco/gi/itto.gif",
    atributos: {
        DanoFísico: 60,
        PoderMágico: 410,
        Armadura: 69
    }
}

var cartaXinyan = {
    nome: "Xinyan",
    image: "../img/banco/gi/xinyan.gif",
    atributos: {
        DanoFísico: 310,
        PoderMágico: 10,
        Armadura: 80
    }
}

var cartaKazuha = {
    nome: "Kazuha",
    image: "../img/banco/gi/kazuha.gif",
    atributos: {
        DanoFísico: 50,
        PoderMágico: 239,
        Armadura: 45
    }
}

var cartaRazor = {
    nome: "Razor",
    image: "../img/banco/gi/razor2.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 25
    }
}

var cartaXiao = {
    nome: "Xiao",
    image: "../img/banco/gi/xiao.gif",
    atributos: {
        DanoFísico: 420,
        PoderMágico: 32,
        Armadura: 62
    }
}

var cartaZhongli = {
    nome: "Zhongli",
    image: "../img/banco/gi/zhongli.gif",
    atributos: {
        DanoFísico: 415,
        PoderMágico: 13,
        Armadura: 60
    }
}

var cartaEi = {
    nome: "Raiden Shogun",
    image: "../img/banco/gi/ei.gif",
    atributos: {
        DanoFísico: 320,
        PoderMágico: 25,
        Armadura: 75
    }
}

var cartaSuperTrunfo = {
    nome: "Abyss Mage",
    image: "../img/banco/gi/kaeya.gif",
    atributos: {
        DanoFísico: 1000,
        PoderMágico: 1000,
        Armadura: 1000
    }
}

var cartaScharamouche = {
    nome: "Scharamouche",
    image: "../img/banco/gi/scaramouche.gif",
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
    cartaCandance,
    cartaTartaglia,
    cartaChongyun,
    cartaCyno,
    cartaDiona,
    cartaItto,
    cartaXinyan,
    cartaKazuha,
    cartaRazor,
    cartaXiao,
    cartaZhongli,
    cartaEi,
    cartaSuperTrunfo,
    cartaScharamouche
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

