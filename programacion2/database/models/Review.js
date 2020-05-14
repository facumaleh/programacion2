module.exports = function (sequelize, DataTypes) {
    const review = sequelize.define(
        'Review',
        {
            idMovie: DataTypes.INTEGER,
            idUser: DataTypes.INTEGER,
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
    return review;
}