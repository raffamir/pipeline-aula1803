function buscarUsuario(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
}

module.exports = buscarUsuario;