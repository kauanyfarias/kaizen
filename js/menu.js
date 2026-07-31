const botaoMenu = document.getElementById('botao-menu')
const barraLateral = document.getElementById('barra-lateral')
const overlay = document.getElementById('overlay')
const logo = document.getElementById('logo')

botaoMenu.addEventListener('click', function(){
    barraLateral.classList.toggle('aberto')
    overlay.classList.toggle('ativo')
    logo.classList.toggle('inativo')
})

overlay.addEventListener('click', function(){
    barraLateral.classList.remove('aberto')
    overlay.classList.remove('ativo')
    logo.classList.remove('inativo')
})