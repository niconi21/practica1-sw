const fs = require('fs');
const path = require('path');

const tools = {};

const rutaArchivo = path.resolve(__dirname, '../data/usuario.json');
let usuarios = [];

tools.setStatus = (ok, status, message, result = {}) => {
    return { ok, status, message, result }
}

tools.obtenerUsuarios = () => {
    try {
        if (fs.existsSync(rutaArchivo)) {
            usuarios = JSON.parse(fs.readFileSync(rutaArchivo));
            return tools.setStatus(true, 200, 'Información de usuarios', { usuarios })
        }
        else
            return tools.setStatus(false, 400, 'Usuarios no encontrados', { error: 'El archivo no existe' })
    } catch (error) {
        return tools.setStatus(false, 500, 'Error interno del servidor')
    }
}

tools.obtenerUsuario = (id) => {
    try {
        if (fs.existsSync(rutaArchivo)) {
            tools.obtenerUsuarios();
            let usuario = usuarios.find(usuario => usuario.id == id)

            return tools.setStatus(true, 200, 'Información del usuario', { usuario })
        }

        else
            return tools.setStatus(false, 400, 'Usuario no encontrado', { error: 'El archivo no existe' })
    } catch (error) {
        return tools.setStatus(false, 500, 'Error interno del servidor')
    }
}

tools.guardarUsuario = (usuario = { nombre, usuario, clave }) => {
    try {
        if (fs.existsSync(rutaArchivo)) {
            tools.obtenerUsuarios()
            usuario.id = usuarios.length
            usuarios.push(usuario)
            fs.writeFileSync(rutaArchivo, JSON.stringify(usuarios));
            return tools.setStatus(true, 200, 'Usuario creado', { usuario })
        }
        else
            return tools.setStatus(false, 400, 'Usuario no creado', { error: 'El archivo no existe' })
    } catch (error) {
        return tools.setStatus(false, 500, 'Error interno del servidor')
    }
}



module.exports = tools