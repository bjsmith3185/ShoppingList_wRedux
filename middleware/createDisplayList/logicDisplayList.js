const shopping = require("../../controllers/shoppingController");

module.exports = {
  displayList: function(data) {
    return new Promise((resolve, reject) => {
        console.log("in displayList()")
        console.log(data.myStore)
      shopping
      .findByStore(data.myStore)
      .then(dbresult => {
        console.log("dbresult############");
        console.log(dbresult)

        // this returned the items my store











        

        // let count = 0;
        // // console.log(returnData)

        // for (var i = 0; i < dbresult.length; i++) {
        //   if (!dbresult.strikeThru) {
        //     count++;
        //   }
        // }

        // let returnData = {
        //   list: dbresult,
        //   countRemaining: count
        // };

        // console.log(returnData);
        // resolve(returnData);
      });
    }).catch(err => console.log(err));
  }
};
