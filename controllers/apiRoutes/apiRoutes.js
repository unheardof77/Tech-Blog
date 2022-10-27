const router = require(`express`).Router();
const { Post, Comment, User} = require(`../../models`);
const verification = require(`../../utils/middleWare`)


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
        const userData = await User.findOne({ where: {username: req.body.username}});
        console.log("------------")
        console.log(userData)
        console.log(userData.password)
        console.log(userData.dataValues)
        console.log("/n")
        if(!userData) return res.status(404).json("Incorrect username, email or password.");

        const password = await userData.checkPassword(req.body.password);
        if(!password) return res.status(404).json("Incorrect username, email or password!");

        req.session.save(() =>{
            console.log("into save")
            req.session.userId = userData.id;
            console.log("passed id")
            req.session.loggedIn = true;
            res.status(202).json({user: userData, message: "Logged in"});
        });
    } catch(err){
        res.status(500).json(err)
    };
});

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
});

router.post(`/createpost`, verification, async (req, res) =>{
    try{
        const data = await Post.create({
            user_id: req.session.userId,
            post_title: req.body.post_title,
            post_message: req.body.post_message,
            time: req.body.time
        });
        if(data){
            res.status(200).json("Created post.");
        }else {
            res.status(500).json("Unable to create post.");
        };
    }catch(err){
        res.status(500).json(err)
    };
});

router.post(`/createcomment`, verification, async (req, res) =>{
    try{
        const data = await Comment.create({
            user_id: req.session.userId,
            post_id: req.body.post_id,
            comment: req.body.comment
        });
        if(!data){
            res.status(500).json("Could not create comment.");
        }else{
            res.status(200).json(data);
        };
    }catch (err){
        res.status(500).json(err);
    };
})

router.put(`/updatepost`, verification, async (req, res) =>{
    try{
        const data = await Post.update(req.body, {where: {id: req.body.post}});
        if(!data){
            res.status(500).json("Could not update post.");
        }else{
            res.status(200).json(data);
        };
    }catch (err){
        res.status(500).json(err);
    };
})

module.exports = router;