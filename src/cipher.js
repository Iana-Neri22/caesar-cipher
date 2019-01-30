function cipherEncode(message, offset) {

  let codeCipher = '';

  for (i = 0; i < message.length; i++) {
    let codAsc = message.charCodeAt(i);

    if (codAsc >= 65 && codAsc <= 90) {
      let encodeMai = (codAsc - 65 + (offset % 26) + 26) % 26 + 65;

      let codMai = String.fromCharCode(encodeMai);
      codeCipher += codMai;
    }

    else if (codAsc >= 97 && codAsc <= 122) {
      let encodeMin = (codAsc - 97 + (offset % 26) + 26) % 26 + 97;

      let codMin = String.fromCharCode(encodeMin);
      codeCipher += codMin;
    }

    else {
      let others = String.fromCharCode(codAsc);
      codeCipher += others;
    }


  }
  return codeCipher;

}

function printEncode() {
  let message = document.getElementById("message").value;
  let offset = parseInt(document.getElementById("offset").value);
  
  document.getElementById("homepage").style.display = "none";
  document.getElementById("FinalMessage").style.display = "block";

  document.getElementById("resultCod").innerHTML = cipherEncode(message, offset);
}


function cipherDecode(message, offset) {

  let decoderCipher = '';

  for (i = 0; i < message.length; i++) {
    let codAsc = message.charCodeAt(i);

    if (codAsc >= 65 && codAsc <= 90) {
      let decoderMai = (codAsc - 65 - (offset % 26) + 26) % 26 + 65;

      let decMai = String.fromCharCode(decoderMai);
      decoderCipher += decMai;
    }

    else if (codAsc >= 97 && codAsc <= 122) {
      let decoderMin = (codAsc - 97 - (offset % 26) + 26) % 26 + 97;

      let decMin = String.fromCharCode(decoderMin);
      decoderCipher += decMin;
    }

    else {
      let others = String.fromCharCode(codAsc);
      decoderCipher += others;
    }
  }
  return decoderCipher;
}

function printDecode() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("FinalMessage2").style.display = "block";

  message = document.getElementById("message").value;
  offset = parseInt(document.getElementById("offset").value);
 
  document.getElementById("resultDecoder").innerHTML = cipherDecode(message, offset);
}

function goBack() {
  document.getElementById("homepage").style.display = "block";
  document.getElementById("FinalMessage").style.display = "none";
  document.getElementById("FinalMessage2").style.display = "none";
}


