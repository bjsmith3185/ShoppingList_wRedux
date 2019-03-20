import React from "react";
import "./List.css";

const List = props => (
  <div className="list">
    {props.list && (
      <div className="item-list-container">
        {props.list.map((item, i) => (
          <div
            className="item"
            onClick={() => props.strike(item._id, item.strikeThru)}
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
                onClick={() => props.delete(item._id)}
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

export default List;

// <div>
//     {props.list && (
//       <ul className="item-list-container">
//         {props.list.map((item, i) => (
//             <li className="item" key={i}>
//               <span className="item-name">{item.item}</span>

//               <span className="item-qty">Qty: {item.qty}</span>

//               <button className="item-delete-btn" onClick={() => props.delete(item._id)}>X</button>

//             </li>
//           ))}

//       </ul>
//     )}

//   </div>

// <div>
//     {props.list && (
//       <ul>
//         {props.list.map((item, i) => (
//             <li className="text-center item" key={i}>
//               <div>{item.item}</div>
//               <div>{item.store}</div>
//               <div>{item.qty}</div>
//               <br />
//               <button onClick={() => props.delete(item._id)}>Delete</button>
//               <hr />
//               <br />
//             </li>
//           ))}

//       </ul>
//     )}

//   </div>
