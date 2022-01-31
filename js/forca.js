var palavra=""
var erro=0
var array = [];
var letras = /^([a-z]+)$/;

if(localStorage.getItem('lista')!=null){
loop=localStorage.getItem('lista').split('')
loop.pop()
loop=loop.join('')
loop=loop.split(',')

for(let x of loop){
    document.querySelectorAll('button.botoesLevel')[x].removeAttribute("onclick");
    document.querySelectorAll('button.botoesLevel')[x].style.cssText="opacity:0.5"
}}

function start(lev){

    later=lev

    $('#letra').removeClass("invisivel").addClass("visivel");
    $('#ok').removeClass("invisivel").addClass("visivel");
    $('#not').removeClass("invisivel").addClass("visivel");

    $('#contador').countdown({ since: 0, format: 'MS', labels: ['', '', '', '', '', ':', ''], labels1: ['', '', '', '', '', ':', ''] });

    if (localStorage.getItem('mortes') != null) { $('#mortec').text(localStorage.getItem('mortes')) }
    else { $('#mortec').text('0') }

    for (let i = 0; i < 3; i++) {
        $('.botoes').removeClass("invisivel").addClass("visivel");
        $('#back').removeClass("visivel").addClass("invisivel");
        document.getElementById("selecao").style.cssText = "width:25%"
    }

    $('#lose').removeClass("visivel").addClass("invisivel");
    $("main").css({"transition-duration": "0.6s", "left": "50%", "transform": "translate(-50%, -50%) rotate(0deg)"});

    var palavras=[]

    if (localStorage.getItem(`palavras${later}`) === null) {
        for (var a in dicas){
            if(a.length===later+3){palavras.push(a)}
        }
        actual = Math.floor(Math.random() * (0 - palavras.length)) + palavras.length;
        palavra = palavras[actual]
    }
    else {
        for (var a in JSON.parse(localStorage.getItem(`palavras${later}`))){
            if(a.length===later+3){palavras.push(a)}
        }
        actual = Math.floor(Math.random() * (0 - palavras.length)) + palavras.length;
        palavra = palavras[actual]
    }

    $('#nivel').text(`Nível ${later}`)

    for (var i = 0; i < palavra.length; i++) {
        var btn = document.createElement("button")
        btn.classList.add("botoesDisplay");
        array.push(btn)
        for (var j = 0; j < array.length; j++) { document.getElementById("blocos").appendChild(btn) }
    }

    seContem = (document.querySelectorAll(".botoesLevel")[later-1])
    displayImg = document.getElementById("displayImg")

    if (seContem.classList.contains('facil')) {
        erro = 0; displayImg.src = `imagens/${erro}.gif`;
    }
    else if (seContem.classList.contains('medio')) {
        erro = 2; displayImg.src = `imagens/${erro}.gif`;
        $("button.botoesDisplay").css({ "font-size": "70px", "border-image-slice": "9 fill" })
        $("#blocos").css({ "padding-left": "60px", "padding-right": "60px" })
    }
    else if (seContem.classList.contains('dificil')) {
        erro = 4; displayImg.src = `imagens/${erro}.gif`;
        $("button.botoesDisplay").css = ({ "font-size": "60px", "border-image-slice": "7 fill" })
        $("#blocos").css({ "padding-left": "40px", "padding-right": "40px" })
    }
    else if (seContem.classList.contains('insano')) {
        erro = 4; displayImg.src = `imagens/${erro}.gif`;
        $("#blocos").css({ "padding-left": "20px", "padding-right": "20px" })

        for (var l = 0; l < palavra.length; l++) {
            document.querySelectorAll("button.botoesDisplay")[l].style.cssText = "font-size:50px; border-image-slice:5 fill"
        }
    } console.log(palavra)
}

function sair() {

    for (var m = 0; m < palavra.length; m++) {
        document.querySelectorAll(".botoesDisplay")[0].remove()
        array = []
    }
    $("main").css({ "top": "50%", "left": "170%", "transform": "translate(-50%, -50%) rotate(-40deg)" })
    palavra = ""

    setTimeout(
        function () {
            $("main").css({ "transition-duration": "0s", "top": "50%", "left": "-100%", "transform": "translate(-50%, -50%) rotate(-40deg)" })
        }, 600);

    $('#contador').countdown('destroy')

}

document.addEventListener('keydown', function (event) {
    if (event.key.match(letras)) { selec = event.key; }
    letra.innerText = selec
}
)

function verificar() {
    for (var k = 0; k < palavra.length; k++) {
        if ((selec === palavra.charAt(k)) && (erro < 10)) { array[k].innerText = selec; letra.innerText = ""; }
    }
    if ((palavra.indexOf(selec) < 0) && (erro < 10)) { erro += 1; letra.innerText = ""; document.getElementById("displayImg").src = `imagens/${erro}.gif` }

    if (erro===6) {
        $('#nivel').text(dicas[palavra])
    }

    if (erro===10) {
        $('#lose').removeClass("invisivel").addClass("visivel");
        if (localStorage.getItem('mortes') != null) {
            localStorage.setItem('mortes', parseInt(localStorage.getItem('mortes')) + 1);
            $('#mortec').text(localStorage.getItem('mortes'))

        }
        else {
            localStorage.setItem('mortes', 1);
            $('#mortec').text(localStorage.getItem('mortes'))
        }

        $('#letra').removeClass("visivel").addClass("invisivel");
        $('#ok').removeClass("visivel").addClass("invisivel");
        $('#not').removeClass("visivel").addClass("invisivel");

    }

    var result = ""
    for (var n = 0; n < palavra.length; n++) {
        result += document.querySelectorAll(".botoesDisplay")[n].innerText;
    } if (result === palavra) {
        document.getElementById("displayImg").src = `imagens/11.gif`;
        $("#nivel").text("Você venceu!");

        if (localStorage.getItem(`palavras${later}`) === null) {
            delete dicas[palavra];
            localStorage.setItem(`palavras${later}`, JSON.stringify(dicas)); console.log("tirou pelado") }
        else {
            tempObj=JSON.parse(localStorage.getItem(`palavras${later}`))
            delete tempObj[palavra];
            localStorage.setItem(`palavras${later}`, JSON.stringify(tempObj)); console.log("tirou cru")
        }

        for (let i = 0; i < 3; i++) {
            $('#letra').removeClass("visivel").addClass("invisivel");
            $('#ok').removeClass("visivel").addClass("invisivel");
            $('#not').removeClass("visivel").addClass("invisivel");
            document.getElementById("selecao").style.cssText = "width:80%"
            $('#back').removeClass("invisivel").addClass("visivel");
        }
        
        $('#back').text(`Tempo: ${$('#contador').countdown('getTimes')[5]}:${$('#contador').countdown('getTimes')[6]}`)
        $('#contador').countdown('destroy')
        
        check()
    }
}

function apagar() {
    letra.innerText = ""
    selec = ""
}