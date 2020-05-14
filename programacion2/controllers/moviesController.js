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
}
