import axios from "axios";


export default {

  // =========== route /populate/....

  populateUser: function () {
    return axios.post("/api/populate/reset/users");
  },

  




};

