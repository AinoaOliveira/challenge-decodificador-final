let inputTexto = document.querySelector('.input');
let outputTexto = document.querySelector('.output');

function criptografar(){
    let texto = inputTexto.value.toLowerCase();

    let resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g,"ober").replace(/u/g, "ufat");

    outputTexto.innerHTML=`<textarea readonly class="input">${resultadoCripto}</textarea><button class="botaoCopiar" id="copiar" onclick="copiar()">Copiar</button>`
}

function descriptografar(){
    let texto = inputTexto.value;
    let resultadoDescripto = texto.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

     outputTexto.innerHTML=`<textarea readonly class="input">${resultadoDescripto}</textarea><button class="botaoCopiar" id="copiar" onclick="copiar()">Copiar</button>`
}

function copiar(){
    let textoCopiar = document.querySelector(".output textarea");

    textoCopiar.select();
    document.execCommand('copy');
    alert('Texto Copiado.');
}
    inputTexto.addEventListener('input', function() {
    this.value = this.value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^\w\s]/gi, ""); 
});