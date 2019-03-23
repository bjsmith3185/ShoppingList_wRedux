import React, { Component } from "react";
import "./List.css";

// Redux
import { connect } from "react-redux";

class List extends Component {
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  delete = item_id => {
    console.log("deleting");
    let data = {
      type: "DELETE_ITEM",
      id: item_id
    };

    this.props.removeItem(data);
  };

  strike = (id, strikeThru) => {
    console.log("strike thru");
    if (strikeThru) {
      strikeThru = false;
    } else {
      strikeThru = true;
    }
    this.props.checkOff(id, strikeThru);
  };

  render() {
    return (
      <div className="list">

        <div className="list-store-area">
          <div className="list-store-title text-center">
          {this.props.myStore}
          </div>
        </div>

        {this.props.list && (
          <div className="item-list-container">
            {this.props.list.map((item, i) => (
              <div
                className="item"
                onClick={() => this.strike(item._id, item.strikeThru)}
                key={i}
              >
                {item.strikeThru ? (
                  <div className="item-container text-left strike">
                    <span className="item-name">{item.item}</span>
                    <span className="item-qty">{item.qty}</span>
                  </div>
                ) : (
                  <div className="item-container text-left">
                    <span className="item-name">{item.item}</span>
                    <span className="item-qty">&#40; {item.qty} &#41;</span>
                  </div>
                )}

                <div className="item-btn-container text-right">
                  <div
                    className="item-delete-btn"
                    onClick={() => this.delete(item._id)}
                  >
                    X
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

// this brings in the state to display on this component
const mapStateToProps = state => {
  // console.log("Props in List component");
  // console.log(state);
  return {
    name: state.name,
    list: state.list,
    myStore: state.myStore
  };
};

const mapDispachToProps = dispach => {
  return {
    addItem: data => {
      dispach({
        type: data.type,
        val: data.val
      });
    },

    removeItem: data => {
      dispach({ type: data.type, val: data.id });
    },

    getList: () => {
      dispach({ type: "GET_LIST" });
    },

    checkOff: (id, strikeThru) => {
      dispach({ type: "CHECK_OFF", val: { id: id, strikeThru: strikeThru } });
    },

    loadAllData: () => {
      dispach({ type: "ALL_DATA" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(List);
