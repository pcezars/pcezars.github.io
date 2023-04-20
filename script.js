var input = document.querySelector('#textoCriptografar');
var buttonCriptografar = document.getElementById('button1');
var buttonDescriptografar = document.getElementById('button2');
var textoResultado = document.getElementById("resultado");
var copiarTexto = document.getElementById('resultado');
var buttonCopiar = document.getElementById('copiar');

function criptografar(){
    var textoPuro = input.value.toLowerCase();
    var textoSaida = textoPuro
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    
    if(textoPuro == ''){
        document.getElementById('alert1').innerHTML = 'Por favor, digite um texto para criptografar.';
        document.getElementById('alert2').style.display = 'none';
    } else {
        document.getElementById('mostrarTexto').style.display = '';
        textoResultado.innerHTML = textoSaida;
    }
}

function descriptografar(){
    var textoPuro = input.value.toLowerCase();
    var textoSaida = textoPuro
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    
    if(textoPuro == ''){
        document.getElementById('alert1').innerHTML = 'Por favor, digite um texto para descriptografar.';
        document.getElementById('alert2').style.display = 'none';
    } else {
        document.getElementById('mostrarTexto').style.display = '';
        textoResultado.innerHTML = textoSaida;
    }
}

function copiar(){
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value)
}

buttonCriptografar.onclick = criptografar;
buttonDescriptografar.onclick = descriptografar;
buttonCopiar.onclick = copiar;