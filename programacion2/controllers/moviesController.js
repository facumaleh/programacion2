const DB = require('../database/models');
const Op = DB.Sequelize.Op;
//const bcrypt = require('bcrypt');


module.exports = {
    lista : function(req, res, ) {
    res.render('home');
      },
    detalles: function (req, res) {
        // DB.Review.findByPk(serieId)

        DB.Review.findAll(   
            { where: 
                [{movie_id: req.query.serieId}]
            })

        .then(Review =>{
            res.render('detalle', { Review: Review, idpelicula:req.query.serieId});
        })
    
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

        let usuarioFinal = {
            username: req.body.username,
            password:  bcrypt.hashSync(req.body.password, 10) ,
            email:    req.body.email,
            birthdate: req.body.birthdate, 
        };
            

        let errors = [];
        
        
        DB.Usuario.findOne({ 
              where: [{
                email: usuarioFinal.email
            }]
        })
            .then(usuario=> {
                
                if (usuario) {
                    console.log('entró al if');
                    
                    errors.push({ msg: 'Email already exists' });
                    // return res.send(errors)
                    // return res.redirect('/movies/home')
                    return res.render('signUp', {
                        errors,
                        usuarioFinal
                    });
                } else {
                    console.log('entro al else');
                    


                   

                    

                    
                    DB.Usuario.create(usuarioFinal)
                    .then(res.redirect('/movies/home'))
                }
                })
            .catch(error => res.send(error));      
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


        logInPorPost:function(req, res){
            res.redirect('/movies/home')
        },



        reviewsAdd:function(req,res){
            const idpelicula=req.params.Id;

            console.log("este es el id:"+ idpelicula)
            console.log(req.query);
            

            
              DB.Review.create(req.body)
                .then(function() {
                    res.redirect('/movies/detalle?serieId='+idpelicula)              
                })

            },
        
            delete: function(req,res){
                DB.Review.destroy(
                    { where: 
                        {movie_id: req.params.Id}
                    })
                    .then(function() {
                        res.redirect('/movies/detalle?serieId='+ req.params.Id)              
                    })
    
                },
                
                 



            edit: function(req,res){
        DB.Review.findOne({
            where: {
               movie_id: req.params.Id
            }
         })
          .then(function(Review){
            res.render('editReview',{Review : Review, movie_id: req.query.Id})
          })  
               
        
        
    
                
            },

    
}

