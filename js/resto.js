function check(){
    palavras=[]

    for (var a in JSON.parse(localStorage.getItem(`palavras`))){
        if(a.length===later+3){palavras.push(a)}}
    
    if (palavras.length===0){
        document.querySelectorAll('button.botoesLevel')[later-1].removeAttribute("onclick");
        document.querySelectorAll('button.botoesLevel')[later-1].style.cssText="opacity:0.5"

        if(localStorage.getItem('lista')===null){
            localStorage.setItem('lista', later-1+',')}
        else{
            localStorage.setItem('lista', localStorage.getItem('lista')+(later-1+','))
        }
    }
}