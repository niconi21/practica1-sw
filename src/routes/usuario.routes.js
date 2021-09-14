const { guardarUsuario, obtenerUsuario, obtenerUsuarios } = require('../tools/tools.config');

const router = require('express').Router();

router.get('/', (req, res) => {
    
        let usuarios = obtenerUsuarios();
    res.json(usuarios)
})

router.get('/:id', (req, res) => {
    let id = req.params.id
        let usuario = obtenerUsuario(id);
    res.json(usuario)
})

router.post('/', (req, res) => {
    let datos = req.body;
    let usuario = guardarUsuario(datos);
    res.json(usuario)
})


module.exports = router;