const shopping = require("../controllers/shoppingController");
const users = require("../controllers/usersController");
const storeList = require("../middleware/storeList");
const storeNames = require("./storeNames");

module.exports = {
  edit: function(id, data) {
    // console.log("in edit middleware");
    // console.log(data);
    return new Promise((resolve, reject) => {
      // update the shopping collection
      let user_id = data.userInfo.userId;
      let currentStore = data.userInfo.myStore;

      shopping
        .update(id, data.data)
        .then(updated => {
          //
          shopping
            .findAll()
            .then(allList => {
              // create a store name list
              storeNames
                .nameList(allList)
                .then(nameList => {
                  // check to see if the current myStore still exists
                  // console.log(nameList);

                  let useOldStore = false;
                  nameList.forEach(store => {
                    if (store === currentStore) {
                      // current store matches
                      console.log("it matches")
                      useOldStore = true;
                    }
                  });
                  let userStore;
                  if (!useOldStore) {
                    // the current store doesnt exist
                    console.log("in the if statement")
                    userStore = data.data.store;
                    // console.log(data.data.store)
                    // set myStore to the new store in update
                    // console.log(currentStore)
                    users
                      .update(user_id, { myStore: data.data.store })
                      .then(userUpdated => {
                        // console.log("user myStore updated")
                        
                      })
                      .catch(err => console.log(err));
                  } else {
                    userStore = currentStore;
                  }

                  console.log(userStore)
                  storeList
                    .storeList(userStore)
                    .then(myStoreList => {
                      myStoreList.storeNames = nameList;
                      //     console.log("returning with same myStore")
                      //   console.log(myStoreList);
                      // contains, count, storeList, storeNames
                      return resolve(myStoreList);
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
