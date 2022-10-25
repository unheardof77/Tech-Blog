const apiRoutes = require(`./apiRoutes`);
const router = require(`express`).Router();

router.use(`/`, apiRoutes);

module.exports = router;