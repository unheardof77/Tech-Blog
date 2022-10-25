const router = require(`express`).Router();
const { Post, Comment, User } = require(`../../models`);

router.get(`/dashboard:id`, async (req, res) =>{
    try{
        const data = await Post.findByPk({raw: true, where: req.params.id});
        if(!data){
            res.status(300).json("No post found.");
        }else{
            res.status(200).render(`dashboard`, { data });
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
        res.status(200).render(`home`, {data});
    } catch (err){
        res.status(500).json(err);
    };
});



module.exports = router;