var input = document.querySelector('#textoCriptografar');
var buttonCriptografar = document.getElementById('button1');
var buttonDescriptografar = document.getElementById('button2');
var textoResultado = document.getElementById("resultado");
var copiarTexto = document.getElementById('resultado');
var buttonCopiar = document.getElementById('copiar');
var img = document.getElementById('imgRet');
var alert1 = document.getElementById('alert1');
var alert2 = document.getElementById('alert2');
var mostrarTexto = document.getElementById('mostrarTexto');

function criptografar(){
    var textoPuro = input.value.toLowerCase();
    var textoSaida = textoPuro
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    
    if(textoPuro == ''){
        alert1.classList.add('vermelho');
        alert1.innerHTML = 'Por favor, digite um texto para criptografar.';
        alert2.style.display = 'none';
    } else {
        mostrarTexto.style.display = '';
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
        alert1.classList.add('vermelho');
        alert1.innerHTML = 'Por favor, digite um texto para descriptografar.';
        alert2.style.display = 'none';
    } else {
        mostrarTexto.style.display = '';
        textoResultado.innerHTML = textoSaida;
    }
}

function copiar(){
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value)
    mostrarTexto.style.display = 'none';
    alert2.style.display = 'hidden';
    alert1.classList.remove('vermelho');
    alert1.innerHTML = 'Mensagem Copiada.'
}

buttonCriptografar.onclick = criptografar;
buttonDescriptografar.onclick = descriptografar;
buttonCopiar.onclick = copiar;