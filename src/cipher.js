document.querySelector("#encode").addEventListener("click", printEncode);
document.querySelector("#decode").addEventListener("click", printDecode);

function cipherEncode(message, offset){
  let codeCipher = '';

  for (let i in message) {
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

function printEncode(){
  const message = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);

  document.getElementById("homepage").style.display = "none";
  document.getElementById("FinalMessage").style.display = "block";

  document.getElementById("resultCod").innerHTML = cipherEncode(message, offset);
  document.getElementById("message").value = " ";
}

function cipherDecode(message, offset) {
  let decoderCipher = '';

  for (let i in message) {
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

function printDecode(){
  let message = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);

  document.getElementById("homepage").style.display = "none";
  document.getElementById("FinalMessage2").style.display = "block";

  document.getElementById("resultDecoder").innerHTML = cipherDecode(message, offset);
  document.getElementById("message").value = " ";
}

function goBack() {
  document.getElementById("homepage").style.display = "block";
  document.getElementById("FinalMessage").style.display = "none";
  document.getElementById("FinalMessage2").style.display = "none";
}

const copyButtons = document.querySelectorAll(".copy-btn")
for(let i in copyButtons){
  copyButtons[i].addEventListener("click", copy)
}
function copy() {
  const textArea = document.querySelectorAll("textarea")
  for(let i in textArea){
    textArea[i].select();
    document.execCommand("copy");
  }  
  }