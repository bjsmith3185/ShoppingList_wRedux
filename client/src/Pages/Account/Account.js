import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import "./Account.css";
import * as ROUTES from '../../constants/routes';


class Account extends Component {



 

  componentDidMount() {
    this.checkIfUserExists();

  }

  // componentWillUnmount() {

  // }

  


  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render = () => {

    return (

      <div>

      
              <Link to={ROUTES.HOME}>Sign In</Link>
          

      </div>

    )
  };
};









export default Account;