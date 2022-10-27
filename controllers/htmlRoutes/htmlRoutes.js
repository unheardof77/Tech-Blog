const router = require(`express`).Router();
const { Post, Comment, User } = require(`../../models`);
const verification = require(`../../utils/middleWare`);

router.get(`/dashboard`, verification, async (req, res) =>{
    try{
        const data = await Post.findByPk({raw: true, where: req.session.userId});
        if(!data){
            res.status(300).json("No post found.");
        }else{
            res.status(200).render(`dashboard`, { data, loggedIn: req.session.loggedIn });
        };
    }catch(err){
        res.status(500).json(err);
    };
});

router.get(`/login`, (req, res) => {
    res.status(200).render(`login`);
});

router.get(`/signup`, (req, res) => {
    res.status(200).render(`signUp`);
});

router.get(`/`, async (req,res) =>{
    try{
        const data = await Post.findAll({raw: true});
        console.log(data);
        res.status(200).render(`home`, {data});
    } catch (err){
        res.status(500).json("hello");
    };
    
});



module.exports = router;