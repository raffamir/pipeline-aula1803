/*
function soma(a, b) {
  if (a === 0) {
    return b;
  }
  return a + b;
}
*/

function buscarUsuario(id) {

  const query = "SELECT * FROM users WHERE id = " + id;

  return query;

}


module.exports = buscarUsuario;