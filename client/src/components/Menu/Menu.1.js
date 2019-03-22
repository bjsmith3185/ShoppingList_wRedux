import React, { Component } from "react";
// Redux
import { connect } from "react-redux";


import "./Menu.css";

class Menu extends Component {
  state = {
   showMenu: false,
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 
  showDropdown = () => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false
      });
    } else {
      this.setState({
        showMenu: true
      });
    }
    document.addEventListener('click', this.closeMenu);
  };


  closeMenu = (event) => {

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({
        showMenu: false,
      })
      document.removeEventListener('click', this.closeMenu);
    }
    
  }

  openStores = () => {
    console.log("clicked open stores")
  }

  render() {

    return (
      <div>

        <i onClick={this.showDropdown} className="mybutton fas fa-bars"></i>

        {this.state.showMenu && (
          <div ref={(element) => { this.dropdownMenu = element}} className="menu">
          <div onClick={this.openStores} className="first-link menu-link"> Stores</div>
          <div> Menu item 2 </div>
          <div> Menu item 3 </div>
        </div>
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
)(Menu);





// {this.state.showMenu && (
//   <div ref={(element) => { this.dropdownMenu = element}} className="menu">
//   <div onClick={this.openStores} className="first-link menu-link"> Stores</div>
//   <div> Menu item 2 </div>
//   <div> Menu item 3 </div>
// </div>
// )}