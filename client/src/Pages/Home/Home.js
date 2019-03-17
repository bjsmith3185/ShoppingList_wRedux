import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import * as ROUTES from "../../constants/routes";
import "./Home.css";
import Form from "../../components/Form";

// Redux
import { connect } from "react-redux";
import List from "../../components/List";

class HomePage extends Component {
  state = {
    item: "",
    store: "",
    qty: "",
    note: ""
  };

  componentDidMount() {
    this.props.getList();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // getListOnLoad = () => {
  //   // API.getListItems()
  //   //   .then(result => {})
  //   //   .catch(err => console.log(err));
  // };

  moreItems = event => {
    event.preventDefault();
    console.log("button was clicked");
    let data = {
      type: "ADD_ITEM",
      val: {
        item: this.state.item,
        store: this.state.store,
        qty: this.state.qty,
        note: this.state.note
      }
    };

    this.props.addItem(data);
  };

  delete = item => {
    console.log("deleting");
    let data = {
      type: "DELETE_ITEM",
      item: item
    };

    this.props.removeItem(data);
  };

  render() {
    console.log(this.props);

    return (
      <div className="App text-center">
        <h1 className="text-center">Welcome to the shopping list</h1>
        <h3 className="text-center">{this.props.name}</h3>
        <hr />
        <br />
        <Form
          onChange={this.onChange}
          note={this.state.note}
          item={this.state.item}
          qty={this.state.qty}
          store={this.state.store}
          addToList={this.moreItems}
        />
        <hr />

        <List list={this.props.list} delete={this.delete} />

       
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  console.log("hello");
  console.log(state);
  return {
    name: state.name,
    list: state.list
  };
};

const mapDispachToProps = dispach => {
  return {
    // addItem: () => { dispach({type: 'ADD_ITEM', val: {
    //   item: 'milk',
    //   store: 'teeter',
    //   qty: 3,
    //   note: 'skim',
    // }}) },

    addItem: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    },

    removeItem: data => {
      dispach({ type: data.type, val: data.item });
    },

    getList: () => {
      dispach({ type: "GET_LIST" });
    }

    // onAgeDown: () => dispach({type: 'AGE_DOWN', val: 1})
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);
