const DB = require('../database/models');
const Op = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');

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
            



        DB.Usuario.create(usuario)
        .then(res.redirect('/movies/home'))
    },

            
            
            // addUser:function(req,res){
            
            // const { username, email, password, birthdate } = req.body;
            // let errors = [],
  
            // if (!username || !email || !password || !birthdate) {
            //   errors.push({ msg: 'Please enter all fields' });
            // }
  
            // if (password.length < 6) {
            //   errors.push({ msg: 'Password must be at least 6 characters' });
            // }
  
            // if (errors.length > 0) {
            //   res.render('SignUp', {
            //     errors,
            //     username,
            //     email,
            //     password,
            //     birthdate
            //   });
            // } else {
            //   DB.Usuario.findOne({ email: email }).then(usuario => {
            //     if (usuario) {
            //       errors.push({ msg: 'Email already exists' });
            //       res.render('signUp', {
            //         errors,
            //         username,
            //         email,
            //         password,
            //         birthdate
            //       });
            //     } else {
            //       const newUser = new User({
            //         username,
            //         email,
            //         password,
            //         birthdate,
                    
            //       });
  
            //       bcrypt.genSalt(10, (err, salt) => {
            //         bcrypt.hash(newUser.password, salt, (err, hash) => {
            //           if (err) throw err;
            //           newUser.password = hash;
            //           newUser
            //             .save()
            //             .then(usuario => {
            //               req.flash(
            //                 'success_msg',
            //                 'You are now registered and can log in'
            //               );
            //               res.redirect('/movies/login');
            //             })
            //             .catch(err => console.log(err));
            //         });
            //       });
            //     }
            //   });
            // }
            // },

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

