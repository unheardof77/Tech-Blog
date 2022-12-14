const { Model, DataTypes } = require(`sequelize`);
const bcrypt = require('bcrypt');
const sequelize = require(`../config/connection`);

class Post extends Model {}

Post.init(
    {
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_message:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;