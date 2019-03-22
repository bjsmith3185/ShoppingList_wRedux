import axios from "axios";


export default {

  // =========== route /populate/....

  populateUser: function () {
    return axios.post("/populate/users");
  },

  populateShopping: function () {
    return axios.post("/populate/shopping");
  },

  //============ system

  getAllData: function () {
    return axios.get('./api/system/all')
  },

  
  // =============== shopping

  updateShoppingList: function (data) {
    return axios.post('./api/shopping', data)
  },

  getListItems: function () {
    return axios.get('./api/shopping');
  },

  deleteItem: function (id) {
    return axios.delete('./api/shopping/' + id)
  },

  checkOff: function (id, data) {
    console.log("api")
    return axios.put('./api/shopping/' + id, data)
  },

  //==================== User

  updateUserData: function (data) {
    console.log("user update api")
    console.log(data)
    return axios.put('./api/users', data)
  }




};

