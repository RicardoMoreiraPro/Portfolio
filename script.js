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

var a = document.getElementById('texthab')

function escrevehtml(){
    var b = document.getElementById('skillhtml')
    a.innerHTML = 'É uma linguagem de marcação utilizada na construção de páginas na Web.'
}

function saiuhtml(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevecss(){
    var c = document.getElementById('skillcss')
    a.innerHTML = 'É uma linguagem de estilo, usada para personalização visual de um site.'
}

function saiucss(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevejs(){
    var d = document.getElementById('skilljs')
    a.innerHTML = 'É uma linguagem de programação de alto nível, com tipagem dinâmica fraca e multiparadigma.'
}

function saiujs(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevephp(){
    var e = document.getElementById('skillphp')
    a.innerHTML = 'C# é uma linguagem multiparadigma, de tipagem forte, desenvolvida pela Microsoft.'
}

function saiuphp(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevesql(){
    var f = document.getElementById('skillsql')
    a.innerHTML = 'SQL é uma linguagem padrão para trabalhar com bancos de dados relacionais.'
}

function saiusql(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escreveshopify(){
    var g = document.getElementById('skillshopify')
    a.innerHTML = 'É uma plataforma onde se pode configurar uma loja virtual.'
}

function saiushopify(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevegit(){
    var h = document.getElementById('skillgit')
    a.innerHTML = 'Controla o histórico de alterações de arquivos e projetos de desenvolvimento de software.'
}

function saiugit(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

function escrevegithub(){
    var i = document.getElementById('skillgithub')
    a.innerHTML = 'É uma plataforma de hospedagem de código-fonte e arquivos.'
}

function saiugithub(){
    a.innerHTML = '/* Passe o mouse por cima ou clique em alguma habilidade para ler a descrição */'
}

