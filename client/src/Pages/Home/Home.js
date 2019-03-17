import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import * as ROUTES from "../../constants/routes";
import "./Home.css";

// Redux
import { connect } from "react-redux";



class HomePage extends Component {
  moreItems = event => {
    event.preventDefault();
    console.log("button was clicked");
    let data = {
      type: "ADD_ITEM",
      val: {
        item: "milk",
        store: "teeter",
        qty: 3,
        note: "skim"
      }
    }

    this.props.addItem(data);
  };

  delete = (item) => {
    console.log('deleting')
    let data = {
      type: 'DELETE_ITEM',
      item: item
    }

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

        <form>
          <span>Add new item</span>
          <button onClick={this.moreItems}>Add</button>
          {/* <button onClick={this.props.addItem}>Add</button> */}
        </form>
        <br />
        <hr />
        <ul className="text-center list-container">
          {this.props.list.map((item, i) => (
            <li className="text-center item" key={i}>
              <div>{item.item}</div>
              <div>{item.store}</div>
              <div>{item.qty}</div>
              <div>{item.note}</div>
              <br/>
              <button onClick={() => this.delete(item.item)}>Delete</button>
              <hr />
              <br />
            </li>
          ))}
        </ul>
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

    addItem: (data) => {
      dispach({
        type: data.type,
        val: data.val
      });
    },

    removeItem: (data) => {
      dispach({type: data.type, val: data.item})
    },



    // onAgeDown: () => dispach({type: 'AGE_DOWN', val: 1})
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);