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

  loadData: function(user_id) {
    // console.log(user_id)
    return axios.get('/api/system/load/'+ user_id)
  },

  strikeThru: function(shopping_id, data) {

    return axios.put('/api/system/strike/'+ shopping_id, data)
  },

  deleteItem: function(id) {
    // console.log(id)
    return axios.delete('/api/system/delete/'+id)
  },

  selectStore: function(data) {
    return axios.put('/api/system/setstore', data)
  },

  addItem: function(data) {
    // console.log(data)
    return axios.post('/api/system/addItem/', data)
  },





  // getAllData: function () {
  //   return axios.get('./api/system/all')
  // },

  // checkOff: function (id, data) {
  //   console.log("api")
  //   return axios.put('./api/system/checkoff/' + id, data)
  // },

  
  // =============== shopping

  updateShoppingList: function (data) {
    return axios.post('./api/shopping', data)
  },

  getListItems: function () {
    return axios.get('./api/shopping');
  },

  // deleteItem: function (id) {
  //   return axios.delete('./api/shopping/' + id)
  // },

  

  // checkOff: function (id, data) {
  //   console.log("api")
  //   return axios.put('./api/shopping/' + id, data)
  // },

  //==================== User

  updateUserData: function (data) {
    console.log("user update api")
    console.log(data)
    return axios.put('./api/users', data)
  }




};

