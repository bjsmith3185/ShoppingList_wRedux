const shopping = require('../controllers/shoppingController')
const list = require('./storeList')
const setMyStore = require('./setMyStore')
// updates the strikeThru value in shopping model
// takes in shopping_id and value of true/false
module.exports = {

    delete: function(shopping_id, user_id) {
        return new Promise((resolve, reject) => {
  
            shopping.findById(shopping_id)
            .then(findResult => {
                // console.log(findResult.store)
                shopping.remove(shopping_id)
                .then(dbresult => {
                
    
    
                    list.storeList(findResult.store)
                    .then(listResult => {

// send data to setMYStore.js
                            
                    setMyStore.checkMyStore(listResult, user_id, listResult.myStore)
                    .then(setStore => {
                        console.log("this is myStore")
                        console.log(setStore)
                      
                            listResult.myStore = setStore.myStore

                            // console.log(listResult)
                        resolve(listResult)
                    })
                    .catch((err) => console.log(err))
                        
    
                       
                    })
                    .catch((err) => console.log(err))
      
                })
                .catch((err) => console.log(err))

            })

            
        })
    }
}