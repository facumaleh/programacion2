module.exports = function (sequelize, DataTypes) {
    const review = sequelize.define(
        'Review',
        {
            movie_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            reviewText:DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            score: DataTypes.INTEGER,
        },
            
        {
            tableName: 'usuarios',
            timestamps: false
        }

        

    );



    review .associate = function(models){
        review .belongsTo(models.Usuario ,
        {   as : 'Usuario',
            foreignKey: "user_id"})


    }






    return review;
}