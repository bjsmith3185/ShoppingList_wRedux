import React from "react";
import "./Form.css";

const Form = (props) => (

  <div className="background-area">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-6">
        <div className="form-title">Add Item to List</div>
          <span>Item</span>
          <input className="form-input"
            value={props.item}
            name="item"
            onChange={props.onChange}
            type="text"
            placeholder="Enter Item"
          />
          <br/>

          <span>Qty</span>
          <input className="form-input"
            value={props.qty}
            name="qty"
            onChange={props.onChange}
            type="text"
            placeholder="Qty"
          />
          <br/>

          <span>Store</span>
          <input className="form-input"
            value={props.store}
            name="store"
            onChange={props.onChange}
            type="text"
            placeholder="Store"
          />
          <br/>

          <span>Notes</span>
          <input className="form-input"
            value={props.note}
            name="note"
            onChange={props.onChange}
            type="text"
            placeholder="Add Note"
          />
          <br/>
          <button className="form-btn btn btn-info" onClick={props.addToList}>Submit</button>

      </div>
    </div>

  </div>
);

export default Form;

