const { Post } = require(`../models`);

const postData = [
    {
        post_title: "Clickbate title test 1",
        post_message: ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima libero a fugiat maiores quaerat quis, eos perferendis autem itaque similique voluptatem deleniti officia voluptates? Aperiam maxime aspernatur id accusantium.",
        user_id: 1
    },
    {
        post_title: "Clickbate title test 2",
        post_message: ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima libero a fugiat maiores quaerat quis, eos perferendis autem itaque similique voluptatem deleniti officia voluptates? Aperiam maxime aspernatur id accusantium.",
        user_id: 1
    },
    {
        post_title: "Clickbate title test 3",
        post_message: ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima libero a fugiat maiores quaerat quis, eos perferendis autem itaque similique voluptatem deleniti officia voluptates? Aperiam maxime aspernatur id accusantium.",
        user_id: 1
    },
    {
        post_title: "Clickbate title test 4",
        post_message: ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima libero a fugiat maiores quaerat quis, eos perferendis autem itaque similique voluptatem deleniti officia voluptates? Aperiam maxime aspernatur id accusantium.",
        user_id: 1
    },
    {
        post_title: "Clickbate title test 5",
        post_message: ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima libero a fugiat maiores quaerat quis, eos perferendis autem itaque similique voluptatem deleniti officia voluptates? Aperiam maxime aspernatur id accusantium.",
        user_id: 1
    }
];

const seedComment = () => Post.bulkCreate(postData);

module.exports = seedComment;