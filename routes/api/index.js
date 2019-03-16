const router = require("express").Router();
const picturesRoutes = require("./picturesRouter");


//  routes
router.use("/pictures", picturesRoutes);


module.exports = router;
