import axios from "axios";


export default {

  // =========== route /populate/....

  populateUser: function () {
    return axios.post("/populate/users");
  },

  populateShopping: function () {
    return axios.post("/populate/shopping");
  },

  




};

