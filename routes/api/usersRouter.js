const router = require("express").Router();
const users = require("../../controllers/usersController");
const makeList = require("../../middleware/createDisplayList/logicDisplayList")
// route  /api/users

router.route("/").get((req, res) => {
  users
    .findAll()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route('/').put((req, res) => {

  // send to middleare folder
  makeList.displayList(req.body)

  // users
  // .update(req.body)
  // .then(dbresults => {
  //   res.json(dbresults);
  // })
  // .catch(err => res.status(422).json(err));
})
module.exports = router;
