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
      let usuario = {
            username: req.body.username,
            password: req.body.password,
            email:    req.body.email,
            birthdate: req.body.birthdate, };
            let errors = [];



        DB.Usuario.create(usuario)
        .then(res.redirect('/movies/home'))
    },

    UserDetail: function (req,res)
        // let username = req.params.username;
        // DB.Usuario.findByPk(username)
        // .then(resultados=>{
        //     res.render('userDetails', { resultados: resultados, usuario: username})
        // })
        {
            let username= req.params.username;
            let email= req.params.email;
            let birthdate= req.params.birthdate;

            DB.Usuario.findByPk(username)
            .then(resultados =>{
                res.render('userDetails', { resultados: resultados, username:username,email:email,birthdate:birthdate})
            })
        },


        signUp :function (req, res) {
            res.render ('signUp')
            
        },
        logIn :function (req, res) {
            res.render ('logIn')
            
        },






    
}

