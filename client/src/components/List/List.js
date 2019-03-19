import React from "react";
import "./List.css";




const List = (props) => (

  <div>
    {props.list && (
      <ul>
        {props.list.map((item, i) => (
            <li className="text-center item" key={i}>
              <div>{item.item}</div>
              <div>{item.store}</div>
              <div>{item.qty}</div>
              <div>{item.note}</div>
              <br />
              <button onClick={() => props.delete(item._id)}>Delete</button>
              <hr />
              <br />
            </li>
          ))}

      </ul>
    )}


  </div>

);

export default List;

