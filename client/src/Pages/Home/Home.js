import React, { Component } from "react";
import "./Home.css";


// Redux
import { connect } from "react-redux";
import List from "../../components/List";
import Header from "../../components/Header";

class HomePage extends Component {
  // componentDidMount() {
  componentWillMount() {
    this.props.loadAllData();
  }



  render() {
    // console.log(this.props);

    return (
      <div className="App ">
        <Header />
        <List />
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("hello");
  // console.log(state);
  return {
   
  };
};

const mapDispachToProps = dispach => {
  return {
    loadAllData: () => {
      dispach({ type: "ALL_DATA" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);


