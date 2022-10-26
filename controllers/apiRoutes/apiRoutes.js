const router = require(`express`).Router();
const { Post, Comment, User} = require(`../../models`);


router.post(`/signup`, async (req, res) => {
    try{
        const data = await User.create(req.body);
        res.status(201).json(data);
    } catch(err){
        res.status(500).json(err);
    };
});

router.post(`/login`, async (req, res) =>{
    try{
        const userData = await User.findOne({where: {username: req.body.username}});
        if(!userData) return res.status(404).json("Incorrect username, email or password.");

        const password = await userData.checkPassword(req.body.password);
        if(!password) return res.status(404).json("Incorrect username, email or password!");

        req.session.save(() =>{
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.status(202).json({user: userData, message: "Logged in"});
        });
    } catch(err){
        res.status(500).json(err)
    };
})

router.post(`/logout`, async (req, res) => {
    try{
        if(req.session.loggedIn){
            req.session.destroy(() =>{
                res.status(202).end();
            });
        }else{
            res.status(404).end();
        };
    }catch(err){
        res.status(500).json(err);
    };
})

module.exports = router;