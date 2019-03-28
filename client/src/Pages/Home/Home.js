import React, { Component } from "react";
// import { browserHistory } from 'react-router';
import "./Home.css";



// Redux
import { connect } from "react-redux";
import List from "../../components/List";
import Header from "../../components/Header";

class HomePage extends Component {
  // componentDidMount() {
  componentWillMount() {
    const { history } = this.props;
      const user_id = localStorage.getItem("userId");
      this.props.loadAllData(user_id, history)
  }


  render() {
    console.log("render in Home")
 console.log(this.props)
    return (
      <div className="App ">
        <Header />

        {/* <List /> */}

        {!this.props.myStore ? (
          <div className="text-center home-no-list">No items on your list</div>
        ) : ( <List /> )}

      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("state coming into home.js");
  // console.log(state);
  return {
   userId: state.userId,
   allList: state.allList,
   myStore: state.myStore,
  };
};

const mapDispachToProps = dispach => {
  return {
    loadAllData: (id, history) => {
      // dispach({ type: "LOAD_DATA", val: '5c8e73b6add5286e74485f43' });
      // dispach({ type: "LOAD_DATA", val: data });
      dispach({ type: "LOAD_DATA", payload: { id, history }});
    },

    setHistory: (history) => {
      dispach({ type: "SET_HISTORY", payload: { history } })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);


