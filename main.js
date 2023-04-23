function encriptarDesencriptar(encriptar) {
    var texto = document.querySelector("#input-texto").value.toLowerCase(); // Convertir el texto a minúsculas
    var caracteresProhibidos = /[^a-z\s]/g; // Expresión regular para caracteres prohibidos (excluyendo el espacio)
    if (caracteresProhibidos.test(texto)) {
        alert("¡Solo se permiten letras minúsculas sin acentos y caracteres especiales (excepto espacio)!");
        document.querySelector("#input-texto").value = texto.replace(caracteresProhibidos, ""); // Remover caracteres prohibidos del input
        return; // Salir de la función si se encontraron caracteres prohibidos
    }
    var textoCifrado;
    if (encriptar) {
        textoCifrado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    } else {
        textoCifrado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }
    document.querySelector(".text-input-salida").value = textoCifrado;
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = function() {
    encriptarDesencriptar(true);
};

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = function() {
    encriptarDesencriptar(false);
};

var boton3 = document.querySelector("#btn-copy");
boton3.onclick = function() {
    var textoCifrado = document.querySelector(".text-input-salida").value;
    var elementoTemporal = document.createElement("textarea");
    document.body.appendChild(elementoTemporal);
    elementoTemporal.value = textoCifrado;
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
};

var inputTexto = document.querySelector("#input-texto");
inputTexto.addEventListener("input", function() {
    var texto = inputTexto.value.toLowerCase(); // Convertir el texto a minúsculas
    var caracteresProhibidos = /[^a-z\s]/g; // Expresión regular para caracteres prohibidos (excluyendo el espacio)
    if (caracteresProhibidos.test(texto)) {
        alert("¡Solo se permiten letras minúsculas sin acentos y caracteres especiales (excepto espacio)!");
        inputTexto.value = texto.replace(caracteresProhibidos, ""); // Remover caracteres prohibidos del input
    }
});

