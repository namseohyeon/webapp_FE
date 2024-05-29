import React, { useState } from "react";

const ShoppingitemColumm = ({ item, onDelete }) => {
  return (
    <tr>
      <th style={{ padding: '10px', border: '1px solid black' }}>id</th>
      <th style={{ padding: '10px', border: '1px solid black' }}>title</th>
      <th style={{ padding: '10px', border: '1px solid black' }}>price</th>
      <th style={{ padding: '10px', border: '1px solid black' }}>topic</th>
      <th style={{ padding: '10px', border: '1px solid black' }}>userid</th>
          {/* <th style={{ padding: '10px', border: '1px solid black' }}>삭제 버튼</th> */}
    </tr>
  );
};
  

export default ShoppingitemColumm;