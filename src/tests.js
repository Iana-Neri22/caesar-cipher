// const teste = (cipherEncode, expectedResult) => {
//     if (expectedResult === cipherEncode) {
//         console.log("Funcionou!")
//     }
//     else {
//         console.log(Error);
//     }
// }

// teste(cipherEncode("ABCabc!", 1), "BCDbcd!");
// teste(cipherEncode("abacaTE", -3), "xyxzxQB");
// teste(cipherEncode("Javascript, HTML e CSS", 7), "Qhchzjypwa, OATS l JZZ");
// teste(cipherEncode("ÉéÁáàÀ 1234 MEI!!", 8), "ÉéÁáàÀ 1234 UMQ!!");
// teste(cipherEncode("Laboratoria <L>", 10), "Vklybkdybsk <V>")

// const teste2 = (cipherDecode, expectedResult) => {
//     if (expectedResult === cipherDecode) {
//         console.log("Funcionou!")
//     }
//     else {
//         console.log(Error);
//     }
// }

// teste2(cipherDecode("ÉéÁáàÀ 1234 MEI!!", 4), "ÉéÁáàÀ 1234 IAE!!");
// teste2(cipherDecode("ZABCDE", -5), "EFGHIJ");
// teste2(cipherDecode("abcDE", -1), "bcdEF");
// teste2(cipherDecode("Vklybkdybsk <V>", 10), "Laboratoria <L>");
// teste2(cipherDecode("Djgsb ef Détbs", 27), "Cifra de César");