import React, { useEffect, useState } from "react";

const ShoppingitemRow = ({ item, onDelete }) => {

    return (
      <tr>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.id}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.title}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.price}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.topic}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.userid}</td>
        {/* <td style={{ padding: '10px', border: '1px solid black' }}> */}
          {/* <button onClick={() => onDelete(todo.id)}>delete</button> */}
        {/* </td> */}
      </tr>
    );
  };
  

export default ShoppingitemRow;