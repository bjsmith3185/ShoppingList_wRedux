import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import Form from "../../components/Form";

import "./Header.css";

class Header extends Component {
  state = {
    item: "",
    store: "",
    qty: "",
    showInputForm: false,


  };

  componentDidMount() {

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // timeout = () => {
  //   setTimeout(
  //     this.remainingItems, 2000
  //   )
  // }
  // remainingItems = () => {

  //   console.log("@@@@@@")

  //   let count = 0;
  //   for ( var i = 0; i < this.state.list.length; i++ ) {
  //     if( !this.state.list.strikeThru ) {
  //       count++;
  //     }
  //   }
  //   console.log("this is count: " + count)
  //   // return count;
  //   this.setState({
  //     countRemaining: count,
  //   })
  // }

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

  render() {
    console.log(this.props.countRemaining);
    return (
      <div className="header-area">
        <h1 className="text-center">Don't Forget</h1>
        <h3 className="text-center">{this.props.name}</h3>

        <div className="home-addbar">
          <div className="addbar-remaining">
            <div className="remaining-count">
            Items Remaining {this.props.countRemaining}
            </div>
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
  // let count = 0;
  // for ( var i = 0; i < state.list.length; i++ ) {
  //   if( !state.list.strikeThru ) {
  //     count++;
  //   }
  // }

  // console.log(count)

  return {
    name: state.name,
    
    // list: state.list,
 countRemaining: state.countRemaining,
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

    // removeItem: data => {
    //   dispach({ type: data.type, val: data.id });
    // },

    // getList: () => {
    //   dispach({ type: "GET_LIST" });
    // },

    // checkOff: (id, strikeThru) => {
    //   dispach({ type: "CHECK_OFF", val: {id: id, strikeThru: strikeThru}})
    // }

    // onAgeDown: () => dispach({type: 'AGE_DOWN', val: 1})
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
