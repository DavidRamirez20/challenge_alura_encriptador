function encriptar() {
   let texto = document.getElementById("texto").value;
   let imagenMuneco = document.getElementById("imagen_muneco");
   let alertaMensaje = document.getElementById("alerta_mensaje");
   let textoEnc = document.getElementById("texto_enc");

   let textoCifrado = texto.replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat")
   ;

   if (texto.length != 0) {
      document.getElementById("resultado").innerHTML = textoCifrado;
      document.getElementById("resultado").setAttribute('disable','true');
      document.getElementById("boton_copiar").hidden = false;
      imagenMuneco.remove();
      alertaMensaje.remove();
      textoEnc.remove();
   } else {
      alert("Ooops! Debes ingresar un texto");
   }
}

function desencriptar() {
   let texto = document.getElementById("texto").value;
   let imagenMuneco = document.getElementById("imagen_muneco");
   let alertaMensaje = document.getElementById("alerta_mensaje");
   let textoEnc = document.getElementById("texto_enc");

   let textoCifrado = texto.replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u")
   ;

   if (texto.length != 0) {
      document.getElementById("resultado").innerHTML = textoCifrado;
      document.getElementById("resultado").setAttribute('disable', 'true');
      imagenMuneco.remove();
      alertaMensaje.remove();
      textoEnc.remove();
   } else {
      alert("Ooops! Debes ingresar un texto");
   }
}

function copiar() {
   let texto = document.getElementById("resultado").innerHTML;
   navigator.clipboard.writeText(texto);
}