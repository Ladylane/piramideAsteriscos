const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var campo = "";

readline.question("Qual o tamanho da piramede?", (linha) => {
  // console.log(`Hey there ${linha}!`);

  // var linha = 5;
  var coluna = linha + (linha - 1);

  var meio = coluna / 2;
  meio = Math.trunc(meio);

  for (var i = 0; i < linha; i++) {
    for (var j = 0; j < coluna; j++) {
      var l = meio - j;
      if (l < 0) {
        l = l * -1;
      }
      if (l <= i) {
        campo += "*";
        // console.log("i:", i, "j:", j, "pinta");
      } else {
        // console.log("i:", i, "j:", j, "nao pinta");
        campo += " ";
      }
    }

    console.log(campo);
    campo = "";
  }

  readline.close();
});
