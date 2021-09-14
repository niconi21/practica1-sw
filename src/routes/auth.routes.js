const jwt = require('jsonwebtoken');
const { guardarUsuario, obtenerUsuario, obtenerUsuarios, setStatus } = require('../tools/tools.config');

const router = require('express').Router();

router.post('/login', (req, res) => {
    let { usuario: usuarioReq, clave } = req.body;

    let usuarios = obtenerUsuarios().result.usuarios;

    let usuario = usuarios.find(usuario => (usuario.usuario == usuarioReq && usuario.clave == clave))
    if (usuario) {
        delete usuario.clave

        let token = jwt.sign(usuario, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRESIN })
        let result = setStatus(true, 200, 'Login exitoso', { usuario, token })

        res.json(result)
    } else {
        res.json(setStatus(false, 401, 'Usuario o contraseña incorrectos', {}))
    }
})






module.exports = router;