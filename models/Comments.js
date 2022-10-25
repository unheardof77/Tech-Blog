const { Model, Datatypes } = require(`sequelize`);
const bcrypt = require('bcrypt');
const sequelize = require(`../config/connection`);

class Comment extends Model {}

Comment.init(
    {
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: true,
            references:{
                model: "user",
                key: "id"
            }
        },
        post_id: {
            type: Datatypes.INTEGER,
            allowNull: true,
            references:{
                model: "post",
                key: "id"
            }
        },
        comment:{
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'comment'
    }
);

module.exports = Comment;