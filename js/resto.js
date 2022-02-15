function check(){
    palavras=[]

    for (var a in JSON.parse(localStorage.getItem(`palavras`))){
        if(a.length===later+3){palavras.push(a)}}
    
    if (palavras.length===0){
        exit = true;
        document.querySelectorAll('button.botoesLevel')[later-1].removeAttribute("onclick");
        document.querySelectorAll('button.botoesLevel')[later-1].style.cssText="opacity:0.5"

        if(localStorage.getItem('lista')===null){
            localStorage.setItem('lista', later-1+',')}
        else{
            localStorage.setItem('lista', localStorage.getItem('lista')+(later-1+','))
        }
        apagarNivel()
    }
}

function apagarNivel(){
    if(localStorage.getItem("completos")===null){
        localStorage.setItem("completos",later-1)
    } else{
        let guardar=localStorage.getItem("completos").split(',')
        guardar.push(later-1);
        localStorage.setItem("completos",later-1);
    }
}