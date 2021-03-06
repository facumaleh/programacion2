let DB = require('./database/models')
const bcrypt = require('bcryptjs');
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
               
            },
        })
        .then(results=>{
            if (bcrypt.compareSync(pass,results.password)) {

                return results;
            }
            else {return false
            }
        })
    }
}


module.exports = moduloLogin;