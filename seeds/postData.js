const { Post } = require(`../models`);

const postData = [

];

const seedComment = () => Post.bulkCreate(postData);

module.exports = seedComment;