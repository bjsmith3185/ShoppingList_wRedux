const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const count = require("./countRemaining");
const storeNames = require("./storeNames");

module.exports = {
  pageLoad: function(id) {
    return new Promise((resolve, reject) => {
      // takes in user._id but we dong have one yet

      users
        .findById()
        .then(userResult => {
          shopping
            .findAll()
            .then(allResult => {
              shopping
                .findByStore(userResult.myStore)
                .then(storeResult => {
                  // storeName list
                  storeNames
                    .nameList(allResult)
                    .then(storeNames => {
                      // get count remaining
                      count
                        .count(storeResult)
                        .then(countResult => {
                          let returnData = {
                            store: userResult.myStore,
                            allList: allResult,
                            storeList: storeResult,
                            countRemaining: countResult,
                            name: userResult.name,
                            storeNames: storeNames,
                          };
                          resolve(returnData);
                        })
                        .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    });
  }
};
