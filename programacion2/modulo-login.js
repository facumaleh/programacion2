let DB = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (email) {
        return DB.Usuario.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return DB.Usuario.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return DB.Usuario.findOne({
            where:{
                email:email,
                password: pass
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;