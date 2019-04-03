var fundo = document.getElementById('fundao');
var btn = document.getElementById('botao');


btn.addEventListener('click', abrirTela);
fundo.addEventListener('click', clicarFora);

function abrirTela(){
    fundo.style.display = 'block';
}

function clicarFora(e){
    if(e.target == fundo){
        fundo.style.display = 'none';
    }
}




 