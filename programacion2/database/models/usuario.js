module.exports = function (sequelize, DataTypes) {
    const usuario = sequelize.define(
        'Usuario',
        {
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            birthdate: DataTypes.DATE,
            password: DataTypes.STRING,
        },
            
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );
    return usuario;
}