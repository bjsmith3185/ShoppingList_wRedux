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
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

  selectStore = (store) => {
    console.log(store)
    const info = {
      val: store,
      type: 'SET_STORE'
    }
    this.props.setStore(info)
    this.setState({
      showStores: false,
      showDropDownMenu: false,
    })
  };

  closeMenu = (event) => {

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({
        showMenu: false,
      })
      document.removeEventListener('click', this.closeMenu);
    }
    
  };

  openStores = () => {
    console.log("clicked open stores")
    this.storeNames()
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

  storeNames = () => {
    let names = []
    names = this.props.list.map(item => item.store)
    let uniqueNames = [...new Set(names)];
    this.setState({
      stores: uniqueNames
    })
  }



  render() {

    return (
      <div className="header-area">
        <h1 className="text-center header-title">Don't Forget</h1>
        <div 
        className="menu-button-area"
        onClick={this.showDropdown}
        >
        <i className="mybutton fas fa-bars"></i>
         </div>
        <h3 className="text-center">{this.props.name}</h3>

        {/* dropdown menu goes here  */}

        {this.state.showDropDownMenu && (
        <Menu 
        openStores={this.openStores}
        showStores={this.state.showStores}
        stores={this.state.stores}
        selectStore={this.selectStore}
        />
        )}

        <div className="home-addbar">
          <div className="addbar-remaining">
              Items Remaining {this.props.countRemaining}
          </div>
          <div className="move-right" onClick={this.openInputForm}>
            <i className="fas fa-plus" />
          </div>
        </div>

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
  console.log("hello");
  console.log(state);
  return {
    name: state.name,
    countRemaining: state.countRemaining,
    list: state.list,
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
    },

    setStore: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
