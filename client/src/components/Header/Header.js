import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import Form from "../Form";
import Menu from "../Menu";

import "./Header.css";

class Header extends Component {
  state = {
    showInputForm: false,
    showDropDownMenu: false,
    showStores: false,
    stores: [],
    item: "",
    store: "",
    qty: "",
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  moreItems = event => {
    event.preventDefault();
    // console.log("button was clicked");
    let data = {
        item: this.state.item,
        store: this.state.store,
        qty: this.state.qty
    };

    this.props.addItem(data);
    this.setState({
      item: "",
      store: "",
      qty: "",
      showInputForm: false
    });
  };

  showDropdown = () => {
    if (this.state.showDropDownMenu) {
      this.setState({
        showDropDownMenu: false
      });
    } else {
      this.setState({
        showDropDownMenu: true
      });
    }
  };

  openInputForm = () => {
    if (this.state.showInputForm) {
      this.setState({
        showInputForm: false
      });
    } else {
      this.setState({
        showInputForm: true
      });
    }
  };


  // may use this function to create a
  // unique store list of items
  selectStore = store => {
    // console.log(store);
    const myStore = {
     myStore: store
    };
    this.props.setStore(myStore);
    this.setState({
      showStores: false,
      showDropDownMenu: false
    });
  };

  closeMenu = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({
        showMenu: false
      });
      document.removeEventListener("click", this.closeMenu);
    }
  };

  openStores = () => {
    console.log("clicked open stores");
    // this.storeNames();
    if (this.state.showStores) {
      this.setState({
        showStores: false
      });
    } else {
      this.setState({
        showStores: true
      });
    }
  };

  // storeNames = () => {
  //   let names = [];
  //   names = this.props.list.map(item => item.store);
  //   let uniqueNames = [...new Set(names)];
  //   this.setState({
  //     stores: uniqueNames
  //   });
  // };

  render() {
    return (
      <div className="header-area">
        {/* Menu Button  */}
        <div className="menu-button-area" onClick={this.showDropdown}>
          <i className="mybutton fas fa-bars" />
        </div>
        {/* Title  */}
        <h1 className="text-center header-title">Hey Don't Forget</h1>
        {/* Add Item Button  */}
        <div className="add-button-area" onClick={this.openInputForm}>
          <i className="myAdd fas fa-plus" />
        </div>

        <h3 className="header-name-area text-center">{this.props.name}</h3>

        {/* dropdown menu goes here  */}

        {this.state.showDropDownMenu && (
          <Menu
            openStores={this.openStores}
            showStores={this.state.showStores}
            stores={this.props.storeNames}
            selectStore={this.selectStore}
          />
        )}

        {this.state.showInputForm && (
          <Form
            onChange={this.onChange}
            item={this.state.item}
            qty={this.state.qty}
            store={this.state.store}
            addToList={this.moreItems}
          />
        )}
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("state coming into Header.js");
  // console.log(state);
  return {
    name: state.name,
    countRemaining: state.countRemaining,
    allList: state.allList,
    storeList: state.storeList,
    storeNames: state.storeNames,
    myStore: state.myStore
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    addItem: data => {
      dispach({
        type: 'ADD_ITEM',
        val: data
      });
    },

    setStore: data => {
      dispach({
        type: 'SET_STORE',
        val: data
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
