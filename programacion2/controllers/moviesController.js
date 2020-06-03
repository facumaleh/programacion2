const DB = require('../database/models');
const Op = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');
let moduloLogin =require('../modulo-login');
// const { log } = require('debug');
// const { where } = require('sequelize/types');
// const { Association } = require('sequelize/types');

module.exports = {
    lista : function(req, res, ) {
    res.render('home');
      },
    detalles: function (req, res) {
        // DB.Review.findByPk(serieId)

        DB.Review.findAll({
            include: ["Usuario"],
            where: { movie_id: req.query.serieId }
         })
         .then(Review => {
            // console.log(Review[0].Usuario);
            res.render('detalle', { Review: Review, idpelicula: req.query.serieId });
         });

        
         
    
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
            let id= req.params.id
            

            DB.Usuario.findByPk(id,
                {
                    include: ["Review"]
                 })
            .then(resultados =>{
            //     res.send(resultados)})
            console.log(resultados)
                res.render('userDetails', { resultados: resultados, username:username,email:email,birthdate:birthdate})
            })
        },


        signUp :function (req, res) {
            res.render ('signUp')
            
        },
       
        logInPorPost:function(req, res) {
      
           let username = req.body.username;
           let password = req.body.password;
           let id= req.body.id;

         

// Conseguir la información del usuario de la base de datos (por email)
// En el .then tenes que recuperar la contraseña y usar un método que compareSync()
// Este metodo toma como primer parametro la contraseña que sin hashear que ingresa el usuario en el formulario de login
// Y como segundo parametro tu contraseña hasheada guardada en la base de datos (la que obtuviste)


               moduloLogin.validar(username, password)
               .then(function(usuario) {
                   if (usuario != false) {
                              
                                
                       DB.Review.findAll({
                           where : {
                    user_id: usuario.id
                           }
                        },
                        
                        {
                            include: ["Usuario"]
                         }
                        )
                       .then(function(resultados) {
                     
                           console.log(resultados)
                           
                        return res.render('myReviewsList',{resultados:resultados, username:username  })
                                        
                       })
                   } else {
                   
                     res.redirect('/movies/botones')
                   }
               })
           

           
             

           },



        reviewsAdd:function(req,res){
            const idpelicula=req.params.Id;
            let username = req.body.username;
            let password = req.body.password;
            

            console.log("este es el id:"+ idpelicula)
            console.log(req.query);

            
                moduloLogin.validar(username, password)
                .then(function(usuario) {
                    if (usuario != false) {
                        DB.Review.create(
                            {user_id: usuario.id,
                            movie_id: req.body.movie_id,
                            reviewText: req.body.reviewText,
                            score: req.body.score,

                            }
                            
                            
                            
                            
                            )


                        .then(function() {
                            res.redirect('/movies/detalle?serieId='+idpelicula)              
                        })
                    } else {
                
                        res.redirect('/movies/botonesDetalle')
                      }
                })
            

            
              

            },

        
            delete: function(req,res){
               let username= req.body.email;
               let password= req.body.password;

               moduloLogin.validar(username, password)
               .then(function(usuario) {
                   if (usuario != false){
                    
                    DB.Review.destroy(
                        { where: 
                            {id: req.params.Id}
                        })
                        .then(function() {
                            res.redirect('/movies/detalle?serieId='+ req.body.movie_id)              
                        })
                    }
                    else{
                      //  res.send("ERROR! USUARIO NO ENCONTRADO!")
                        res.render('botonesDetalle')

                
                     }

                   });

              
    
                },
                

            edit: function(req,res){
                
                DB.Review.findOne({
                    where: {
                    id: req.params.Id
                    }
                })
                .then(function(Review){
                    res.render('editReview',{Review : Review, idpelicula:req.body.idpelicula})
                })  
                
            },



         confirmEdit:function(req,res){
               const idpelicula = req.body.movie_id      
               const idreview = req.params.Id      
               let username = req.body.username;
               let password = req.body.password;
               
    
                // console.log("este es el id:"+ idpelicula)
                // console.log(req.query);
                
                // res.send('/llgó a confirm edit')              

            
                moduloLogin.validar(username, password)
                .then(function(usuario) {
                    if (usuario != false) {

                  DB.Review.update(req.body,{
                      where: {
                        id: req.params.Id
                     }
                  })

                    .then(function() {
                        res.redirect('/movies/detalle?serieId='+idpelicula)              
                    })
                }
                else{
                    res.send("ERROR! USUARIO NO ENCONTRADO!")

                }
            })

    
                },


                myReviews:function(req,res){

                       res.render("myReviews") 

                },
                myReviewsList: function(rec, res){
                    res.render('myReviewsList')
                },
                

                botones: function (req, res){

                    res.render('botones')
                },


                botonesDetalle: function (req, res){

                    res.render('botonesDetalle')
                },



                lastReviews: function(req, res){

                    DB.Review.findAll({
                        include: ["Usuario"],
                        order: [
                            [ 'updatedAt', 'DESC']
                        ],
                      
                    })
                    .then(function (resultados) {
                        res.render("lastReviews",{
                            resultados: resultados
                        });
                    })
                    .catch(function (error) {
                        return res.send(error);
                    })
            },


            toprated:function(req, res){

                DB.Review.findAll({
                    include: ["Usuario"],
                    order: [
                        [ 'score', 'DESC']
                    ],
                  
                })
                .then(function (resultados) {
                    res.render("toprated",{
                        resultados: resultados
                    });
                })
                .catch(function (error) {
                    return res.send(error);
                })
        },
                
        worstrated:function(req, res){

            DB.Review.findAll({
                include: ["Usuario"],
                order: [
                    [ 'score', 'ASC']
                ],
              
            })
            .then(function (resultados) {
                res.render("worstrated",{
                    resultados: resultados
                });
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
      




                
}

