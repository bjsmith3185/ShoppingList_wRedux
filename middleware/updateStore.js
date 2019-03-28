const users = require('../controllers/usersController');
const storeList = require('./storeList');
const storeNames = require('./storeNames');

// updates the slected store in the users model
// takes in storeName and user_id
module.exports = {

    setStore: function(user_id, storeName) {
        return new Promise((resolve, reject) => {
        //    console.log("???")
        //    console.log(storeName)
            users.update(user_id, storeName)
            .then(dbresult => {
                // console.log(dbresult)

                storeList.storeList(dbresult.myStore)
                .then(storeResult => {

                    // let data = {
                    //     myStore: dbresult.myStore,
                    //     storeList: storeResult.storeList,
                    //     countRemaining: storeResult.countRemaining
                    // }
                    // console.log("retrn from storeList")
                    // console.log(storeResult)
                    // console.log(" created return")
                    // console.log(data)
                    storeNames.nameList(storeResult.storeList)
                    .then(allData => {

                        storeResult.storeNames = allData
                        resolve(storeResult)
                    })
                    .catch((err) => console.log(err))
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        })
    }
}



















