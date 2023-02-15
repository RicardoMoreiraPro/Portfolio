function mudouTamanho(){
    if (window.innerWidth >= 768){
        menuhead.style.display = 'block'
    } else {
        menuhead.style.display = 'none'
    }
}

function clickMenu(){
    if (menuhead.style.display == 'block'){
        menuhead.style.display = 'none'
    } else {
        menuhead.style.display = 'block'
    }

}