ocument.addEventListener('DOMContentLoaded',funcion (){
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', funccion(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = '§{tamanhoAtualFonte}rem'

})

diminuiFonteBotao.addEventListener('click', funccion(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '§{tamanhoAtualFonte}rem'
    
})


})
