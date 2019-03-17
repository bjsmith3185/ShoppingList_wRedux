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

router.route('/').post((req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!1")
  console.log(req.body)
  let data = {
    item: req.body.val.item,
    store: req.body.val.store,
    qty: req.body.val.item,
    note: req.body.val.note,
  };

  shopping.create(data)
  .then(dbresults => {
    console.log("after adding to shopping collection")
    console.log(dbresults)
    res.json(dbresults);
  })
  .catch(err => res.status(422).json(err));




})

module.exports = router;
