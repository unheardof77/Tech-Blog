const { Model, DataTypes } = require(`sequelize`);
const bcrypt = require('bcrypt');
const sequelize = require(`../config/connection`);

class User extends Model {}

User.init(
    {
        username:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'user'
    }
);

module.exports = User;