var palavra=""
var level = 0
var array = []
var letras = /^(?!Control|Control|ignoremeN)([a-z]+)$/

function start(lev){
$("main").css({"left":"50%", "transform": "translate(-50%, -50%) rotate(0deg)"})
actual=Math.floor(Math.random() * (0 - lev.length)) + lev.length
palavra=lev[actual]
num = palavra.length
level=palavra.length-3
$('#nivel').text(`Nível ${level}`)

for(var i = 0; i < num; i++){
var btn = document.createElement("button")
btn.classList.add("botoesDisplay");
array.push(btn)
for(var j = 0;j<array.length; j++){document.getElementById("blocos").appendChild(btn)}} 

seContem=(document.querySelectorAll(".botoesLevel")[palavra.length-4])
displayImg=document.getElementById("displayImg")

if(seContem.classList.contains('facil')){
erro=0; displayImg.src=`imagens/${erro}.gif`;
}
else if(seContem.classList.contains('medio')){
erro=2; displayImg.src=`imagens/${erro}.gif`;
$("button.botoesDisplay").css({"font-size":"70px", "border-image-slice":"9 fill"})
$("#blocos").css({"padding-left":"60px", "padding-right":"60px"})
}
else if(seContem.classList.contains('dificil')){
erro=4; displayImg.src=`imagens/${erro}.gif`;
$("button.botoesDisplay").css=({"font-size":"60px", "border-image-slice":"7 fill"})
$("#blocos").css({"padding-left": "40px", "padding-right": "40px"})
} 
else if(seContem.classList.contains('insano')){
erro=4; displayImg.src=`imagens/${erro}.gif`;
$("#blocos").css({"padding-left":"20px", "padding-right": "20px"})

for(var l = 0; l < palavra.length; l++){
$("button.botoesDisplay")[l].css({"font-size":"50px", "border-image-slice":"5 fill"})
}
}}

function sair(){
for(var m = 0; m < palavra.length; m++){
document.querySelectorAll(".botoesDisplay")[0].remove()
array=[]}
$("main").css({"top":"50%", "left":"170%", "transform":"translate(-50%, -50%) rotate(-40deg)"})

;
palavra=""
}

document.addEventListener('keydown', function(event) {
if(event.key.match(letras)) {selec = event.key;}
letra.innerText=selec; 
checkEnd()}
)

function verificar(){
for(var k = 0; k < palavra.length; k++){
if(selec===palavra.charAt(k)){array[k].innerText=selec; letra.innerText="";}
} if(palavra.indexOf(selec)<0){erro+=1; letra.innerText=""; document.getElementById("displayImg").src=`imagens/${erro}.gif`;}}

function apagar(){
letra.innerText=""
selec=""
}

function checkEnd(){

if(seContem.classList.contains('facil')){
maxError=6;}
else if(seContem.classList.contains('medio')){
maxError=8;}
else if(seContem.classList.contains('dificil')){
maxError=10;}
else if(seContem.classList.contains('insano')){
maxError=10;}
}