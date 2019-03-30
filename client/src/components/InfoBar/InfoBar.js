import React, { Component } from "react";
import "./InfoBar.css";

// Redux
import { connect } from "react-redux";

class InfoBar extends Component {
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  cancelEdit = () => {
    // this.setState({
    //   showEditWindow: false
    // });
    let value;
    if( this.props.editing ) {
      value = false;
    } else {
      value = true;
    }

    let newValue;
    if (this.props.showEditMenu) {
      newValue = false;
    } else {
      newValue = true;
    }
    // let data = false;
    this.props.cancelUpdate(value, newValue);
  };

  render() {

    const newStyle = this.props.showEditMenu ||  this.props.showDropdownMenu || this.props.showAddItemMenu ? "infobar-area-edit text-center" : "infobar-area text-center"
   
       return (

      <div className={newStyle}>
        <div className="info-store-title text-center">
          {this.props.myStore
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </div>

        {!this.props.editing ? (
          <div>
            <div className="update-edit-area text-left">
              <div className="info-cancel-edit-btn" onClick={this.cancelEdit}>
                Cancel Edit
              </div>
            </div>

            <div className="info-list-qty-remaining text-right">
              Items Remaining {this.props.countRemaining}
            </div>
          </div>
        ) : (
          <div className="info-list-qty-remaining-solo text-right">
            Items Remaining {this.props.countRemaining}
          </div>
        )}
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  return {
    myStore: state.myStore,
    editing: state.editing,
    showEditMenu: state.showEditMenu,
    showDropdownMenu: state.showDropdownMenu,
    showAddItemMenu: state.showAddItemMenu,
    countRemaining: state.countRemaining,
   };
};

const mapDispachToProps = dispach => {
  return {
    cancelUpdate: ( editing, showEditMenu ) => {
      dispach({
        type: "CANCEL_UPDATE",
        payload: { editing, showEditMenu }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(InfoBar);