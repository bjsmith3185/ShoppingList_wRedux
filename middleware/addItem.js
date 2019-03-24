const shopping = require('../controllers/shoppingController')
const list = require('./storeList')
// ADDS item in shopping model

module.exports = {

    newItem: function(data) {
        return new Promise((resolve, reject) => {

            shopping.create(data)
            .then(dbresult => {

                list.storeList(dbresult.store)
                .then(listResult => {

                    resolve(listResult)
                })
                .catch((err) => console.log(err))
  
            })
            .catch((err) => console.log(err))
        })
    }
}