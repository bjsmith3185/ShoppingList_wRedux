import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import * as ROUTES from "../../constants/routes";
import "./Home.css";
import Navigation from "../../components/Navigation";
import UserIdBar from "../../components/UserIdBar";


class HomePage extends Component {
 

  componentDidMount() {

  }

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  render = () => {
    return (
      <div className="text-center">
       
      </div>
    );
  };
}

export default HomePage;
