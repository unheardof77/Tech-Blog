const Comment = require(`./Comments`);
const Post = require(`./Post`);
const User = require(`./Users`);

User.hasMany(Post,{
    foreignKey: "user_id",
    onDelete: "cascade"
});
User.hasMany(Comment,{
    foreignKey: "user_id",
    onDelete: "cascade"
});

Post.hasMany(Comment,{
    foreignKey: "post_id",
    onDelete: "cascade"
});
Post.belongsTo(User,{
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Post,{
    foreignKey: "user_id"
});

module.exports= {Comment, Post, User};