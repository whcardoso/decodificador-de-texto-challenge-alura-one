function criptografar() {
    const texto = entrada.value;
    const textoCriptografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    mostraResultado(textoCriptografado);
}

function descriptografar() {
    const texto = entrada.value;
    const textoDescriptografado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    mostraResultado(textoDescriptografado);
}

function mostraResultado(texto) {
    const resultado = document.getElementById('resultado');

    if(texto == ''){
        resultado.innerHTML = '<textarea type="text" id="saida" readonly>Nenhuma mensagem informada.</textarea>' + '<button id="copiar" onclick="copiar()">Copiar</button>';
    } else {
        resultado.innerHTML = '<textarea type="text" id="saida" readonly>' + texto + '</textarea>' + '<button id="copiar" onclick="copiar()">Copiar</button>';
    }   
}

function copiar() {
    let textoCopiado = document.getElementById('saida');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Sua mensagem foi copiada com sucesso!');
}

var entrada = document.getElementById('entrada');
var btnCriptografar = document.getElementById('criptografar');
var btnDescriptografar = document.getElementById('descriptografar');

entrada.focus();
btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;