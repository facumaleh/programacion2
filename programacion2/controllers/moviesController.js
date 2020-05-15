const DB = require('../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    lista : function(req, res, ) {
    res.render('home');
      },
    detalles: function (req, res) {
        res.render ('detalle')
        
    },

        
    search: function(req, res){
        res.render('buscador')
    },
    
    porGenero: function(req,res){
        res.render('seriesByGenre')
    },
    seriesGenre: function(req,res){
        res.render('seriesGenres')
    },
    resultadosBusqueda: function(req,res){
        res.render('resultadoBusqueda')
    },


    userList:function (req,res){
        DB.Usuario.findAll()
        .then(resultados =>{
            res.render('listaDeUsuarios', { resultados: resultados, title: "All the users" });
        })
    },

    addUser:function(req,res){
        DB.Usuario.create(req.body)
        .then(res.redirect('/movies/home'))
    },

    UserDetail: function (req,res){
        let id = req.params.id;
        DB.Usuario.findByPk(id)
        .then(resultados=>{
            res.render('userDetails', { resultados: resultados, id: req.params.id })
        })

    },
}

