const router = require(`express`).Router();
const { Post, Comment, User } = require(`../../models`);
const verification = require(`../../utils/middleWare`);

router.get(`/dashboard`, verification, async (req, res) =>{
    try{
        let data = await Post.findAll({where: {user_id: req.session.userId}});
        data = data.map((data) => data.get({plain: true}))
        console.log(data);
        if(!data){
            res.status(300).json("No post found.");
        }else{
            res.status(200).render(`dashboard`, { data, loggedIn: req.session.loggedIn });
        };
    }catch(err){
        res.status(500).json(err);
    };
});

router.get(`/login`, async (req, res) => {
    try{
        res.status(200).render(`login`);
    }catch(err){
        res.status(500).json(err);
    };
});

router.get(`/signup`, async (req, res) => {
    try{
        res.status(200).render(`signUp`);
    }catch(err){
        res.status(500).json(err);
    };
});

router.get(`/`, async (req,res) =>{
    try{
        const oldData = await Post.findAll({ 
            include:[
                {model: Comment,
                include:[
                    {model: User}
                ]
            }
        ]
        });
        const data = oldData.map((data) => data.get({plain: true}));
        console.log(data)
        res.status(200).render(`home`, {data, loggedIn: req.session.loggedIn});
    } catch (err){
        res.status(500).json("hello");
    };
});

module.exports = router;