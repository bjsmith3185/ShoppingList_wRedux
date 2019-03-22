const router = require("express").Router();
const shopping = require("../../controllers/shoppingController");
const users = require("../../controllers/usersController");


// route  /api/system

router.route("/all").get((req, res) => {
  // console.log("in the systems route")
  shopping
    .findAll()
    .then(dbresults => {
      // console.log(dbresults)
     
      users
        .findById()
        .then(userResult => {
          // console.log("in the money")
          // console.log(dbresults)
          // console.log(userResult)
           
           let returnData = {
             storeData: dbresults,
             userData: userResult
           }
           res.json(returnData);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});


module.exports = router;
