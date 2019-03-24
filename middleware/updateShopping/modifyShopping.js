const shopping = require("../../controllers/shoppingController");
const users = require("../../controllers/usersController");

module.exports = {

    checkOff: function(id, value) {
        return new Promise((resolve, reject) => {
            // console.log("in checkoff() middleware")
            // console.log(id)
            // console.log(value)
            shopping.update(id, value)
            .then(shoppingUpdate => {
                // console.log(shoppingUpdate)
                
                shopping.findByStore(shoppingUpdate.store)
                .then(listResults => {
                    // console.log('storelist')
                    // console.log(listResults)
                    resolve(listResults)
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        });
    },



}













