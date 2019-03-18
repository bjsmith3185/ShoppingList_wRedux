import axios from "axios";


export default {

  // =========== route /populate/....

  populateUser: function () {
    return axios.post("/populate/users");
  },

  populateShopping: function () {
    return axios.post("/populate/shopping");
  },

  
  // =============== shopping

  updateShoppingList: function (data) {
    return axios.post('./api/shopping', data)
  },

  getListItems: function () {
    return axios.get('./api/shopping');
  },

  deleteItem: function (item) {
    return axios.delete('./api/shopping/' + item)
  },


};

