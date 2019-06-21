document.querySelector("#encode").addEventListener("click", printEncode);
document.querySelector("#decode").addEventListener("click", printDecode);

function printEncode(){
  const message = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("resultCod").value = cipherEncode(message, offset);
}

function printDecode(){
  const message = document.getElementById("resultCod").value;
  const offset = parseInt(document.getElementById("offset").value);
  document.getElementById("message").value = cipherDecode(message, offset);
}

function cipherEncode(message, offset){
  let codeCipher = '';
  for (let i in message) {
    let codAsc = message.charCodeAt(i);
    if (codAsc >= 65 && codAsc <= 90) {
      let encodeMai = (codAsc - 65 + (offset % 26) + 26) % 26 + 65;
      codeCipher += String.fromCharCode(encodeMai);
    }
    else if (codAsc >= 97 && codAsc <= 122) {
      let encodeMin = (codAsc - 97 + (offset % 26) + 26) % 26 + 97;
      codeCipher += String.fromCharCode(encodeMin);
    }
    else {
      codeCipher += String.fromCharCode(codAsc);
    }
  }
  return codeCipher;
}

function cipherDecode(message, offset) {
  let decoderCipher = '';
  for (let i in message) {
    let codAsc = message.charCodeAt(i);
    if (codAsc >= 65 && codAsc <= 90) {
      let decoderMai = (codAsc - 65 - (offset % 26) + 26) % 26 + 65;
      decoderCipher += String.fromCharCode(decoderMai);
    }
    else if (codAsc >= 97 && codAsc <= 122) {
      let decoderMin = (codAsc - 97 - (offset % 26) + 26) % 26 + 97;
      decoderCipher += String.fromCharCode(decoderMin);
    }
    else {
      decoderCipher += String.fromCharCode(codAsc);
    }
  }
  return decoderCipher;
}