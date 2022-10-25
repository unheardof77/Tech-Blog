const router = require(`express`).Router();
const { Post, Comment, User } = require(`../../models`)
router.get(`/`, async (req,res) =>{
    try{
        const data = await Post.findAll({raw: true})
        res.status(200).render(`home`, {data});
    } catch (err){
        res.status(500).json(err);
    };
})


module.exports = router;