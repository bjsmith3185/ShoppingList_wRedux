import React, { Component } from "react";
// Redux
import { connect } from "react-redux";


import "./Menu.css";

class Menu extends Component {
  state = {
   showStores: false,
   stores: [],
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

 
  // showDropdown = () => {
  //   if (this.state.showMenu) {
  //     this.setState({
  //       showMenu: false
  //     });
  //   } else {
  //     this.setState({
  //       showMenu: true
  //     });
  //   }
  //   document.addEventListener('click', this.closeMenu);
  // };

  selectStore = (store) => {
    console.log(store)
    const info = {
      val: store,
      type: 'SET_STORE'
    }
    this.props.setStore(info)
    this.setState({
      showStores: false
    })
  }


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
      <div className="menu-area">
          <div onClick={this.openStores} className="menu-link stores-link">Stores</div>
          {this.state.showStores && (
            <div className="stores-dropdown">
                {this.state.stores.map((store, i) => (
                  <div 
                    key={i} 
                    className="store-listing"
                    onClick={() => {this.selectStore(store)}}
                    >{store}<span className="store-listing-qty"></span></div>
                ))}
              </div>
          )}

          <div className="menu-link edit-link">Edit List</div>
          <div className="menu-link signout-link">Signout</div>
      </div>
    );
  }
}


// this brings in the state to display on this component
const mapStateToProps = state => {
  console.log("state coming into the component");
  console.log(state);
  return {
    // name: state.name,
    // countRemaining: state.countRemaining,
    list: state.list
  };
};

// functions to dispatch actions
const mapDispachToProps = dispach => {
  return {
    setStore: data => {
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