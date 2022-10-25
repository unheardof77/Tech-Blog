const Comment = require(`./Comments`);
const Post = require(`./Post`);
const User = require(`./Users`);

User.hasMany(Post,);
User.hasMany(Comment,);

Post.hasMany(Comment,);
Post.belongsTo(User,);

Comment.belongsTo(User, );
Comment.belongsTo(Post,);

module.exports= {Comment, Post, User};