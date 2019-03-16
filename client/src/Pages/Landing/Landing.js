import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./Landing.css";


class LandingPage extends Component {

  

  render = () => {
    return (
      <div className="text-center">
            <Link to={ROUTES.HOME}>Sign In</Link>
      </div>
    );
  };
}

export default LandingPage;
