const router = require("express").Router();
const shopping = require("../../controllers/shoppingController");

// route  /api/shopping

router.route("/").get((req, res) => {
  shopping
    .findAll()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
