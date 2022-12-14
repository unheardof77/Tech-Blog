const homeRoutes = require(`./homeRoutes`);
const apiRoutes = require(`./apiRoutes`);
const router = require(`express`).Router();

router.use(`/api`, apiRoutes);
router.use(`/`, homeRoutes);

module.exports= router;