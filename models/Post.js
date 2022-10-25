const { Model, Datatypes } = require(`sequelize`);
const bcrypt = require('bcrypt');
const sequelize = require(`../config/connection`);

class Post extends Model {}

Post.init(
    {
        user_id:{
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        post_title:{
            type: Datatypes.STRING,
            allowNull: false,
        },
        post_message:{
            type: Datatypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'post'
    }
);

module.exports = Post;