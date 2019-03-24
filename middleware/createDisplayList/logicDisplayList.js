const shopping = require("../../controllers/shoppingController");
const users = require("../../controllers/usersController");

module.exports = {
  updateUsersStore: function(data) {
    return new Promise((resolve, reject) => {
      shopping.findByStore(data.myStore).then(dbresult => {
        users
          .update(data)
          .then(updated => {
            let combo = {
              myStore: data.myStore,
              storeList: dbresult
            };
            resolve(combo);
          })
          .catch(err => res.status(422).json(err));
      });
    }).catch(err => console.log(err));
  },

  specificStoreList: function() {
    // console.log('in specifi storelist()')
    return new Promise((resolve, reject) => {
      // fund users store by user_id
      users
        .findById()
        .then(userResult => {
          // console.log(userResult);
          // let userStore = {
          //   store: userResult.myStore
          // }

          // create an arry of only unique stores
          shopping
          .findAll()
          .then(allResults => {
            let names = [];
            names = allResults.map(item => item.store);
            let uniqueNames = [...new Set(names)];

            // create array of items from specific store
            shopping
            .findByStore(userResult.myStore)
            .then(storeResults => {
              // console.log(storeResult);

              // make an array of unique stores

             


              let combo = {
                myStore: userResult.myStore,
                storeList: storeResults,
                name: userResult.name,
                storeNames: uniqueNames
              };
              // console.log(combo)
              resolve(combo);


            })
            .catch(err => console.log(err));


          })
          .catch(err => console.log(err));

          
        })
        .catch(err => console.log(err));
    });
  }
};
