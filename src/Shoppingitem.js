import React, { useState } from "react";
import {ListItem, ListItemText, InputBase, Button, ListItemButton} from '@mui/material';

const Shoppingitem = ({ item, onDelete }) => {
    return (
      <tr >
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.id}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>{item.title}</td>
        <td style={{ padding: '10px', border: '1px solid black' }}>
          {/* <button onClick={() => onDelete(todo.id)}>delete</button> */}
          <button>삭제</button>
        </td>
      </tr>
    );
  };
  

export default Shoppingitem;