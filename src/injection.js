const { exec } = require("child_process");

function listar(req) {
  exec("ls " + req.query.dir);
}

module.exports = listar;