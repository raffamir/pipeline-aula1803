/*
function soma(a, b) {
  if (a === 0) {
    return b;
  }
  return a + b;
}
*/

/*
function soma(a, b) {

  eval("console.log('executando')");

  return a + b;
}
*/
/*
function soma(a, b) {

  let x = 10;
  let x = 20;

  return a + b;

}
*/

function soma(a, b) {

  let resultado = a + b;

  if (resultado > 0) {
    if (resultado > 10) {
      if (resultado > 20) {
        if (resultado > 30) {
          console.log("valor alto");
        }
      }
    }
  }

  return resultado;
}


module.exports = soma;
