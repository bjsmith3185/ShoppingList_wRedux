import React, { Component } from "react";
// Redux
import { connect } from "react-redux";

import "./Form.css";

class Form extends Component {
  state = {
    item: "",
    store: "",
    qty: "",
    showInputForm: false,
    errors: {
      item: false,
      store: false,
      qty: false
    }
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  moreItems = event => {
    event.preventDefault();
    console.log("button was clicked");
    let data = {
      type: "ADD_ITEM",
      val: {
        item: this.state.item,
        store: this.state.store,
        qty: this.state.qty
      }
    };

    this.props.addItem(data);
    this.setState({
      item: "",
      store: "",
      qty: "",
      showInputForm: false
    });
  };

  render() {
    // Form validation
    const { item, store, qty } = this.state;
    const isEnabled = item.length > 0 && store.length > 0 && qty.length > 0;


    return (
      <div className="form-area">
        <div className="form-title text-center">Add Item to List</div>

        <div className="line-item">
          <label className="line-title">Item</label>
          <input
            className="line-input"
            value={this.state.item}
            name="item"
            onChange={this.onChange}
            type="text"
            placeholder="Enter Item"
          />
        </div>

        <div className="line-item">
          <label className="line-title">Qty</label>
          <input
            className="line-input"
            value={this.state.qty}
            name="qty"
            onChange={this.onChange}
            type="text"
            placeholder="Qty"
          />
        </div>

        <div className="line-item">
          <label className="line-title">Store</label>
          <input
            className="line-input"
            value={this.state.store}
            name="store"
            onChange={this.onChange}
            type="text"
            placeholder="Store"
          />
        </div>

        <div className="form-btn-area text-center">
          <button
            disabled={!isEnabled}
            className="text-center form-btn btn btn-info"
            onClick={this.moreItems}
          >
            Add
          </button>
        </div>
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
    countRemaining: state.countRemaining
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Form);
