const { User } = require(`../models`);

const userData = 
    {
        username: "unheardof77",
        password: "password1234",
        email: "test@gmail.com"
    }
;

const seedUser = () => User.create(userData);

module.exports = seedUser;