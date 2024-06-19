import React, { useEffect, useState } from "react";

const ShoppingitemRow = ({ item, likeModifyItem, deleteItem }) => {
  // const [Newitem, NewsetItem] = useState({title:item.title, id:item.id,price:item.price,topic:item.topic,liked:item.liked })
  //let count = 0;
  const likedEventHandler = () => {
    // Create a new item object with the liked property toggled
    const updatedItem = { ...item, liked: !item.liked };
    console.log("-----",updatedItem, "-----")
    //count++;
    //console.log(count);
    // Call the likeModifyItem function passed as a prop
    likeModifyItem(updatedItem);
  };

  const deleteEventHandler = (e) => {
    e.preventDefault();
    // Call the deleteItem function passed as a prop
    deleteItem(item);
  };
    return (
      <tr>
        <td style={{ }}>{item.id}</td>
        <td style={{  }}>{item.title}</td>
        <td style={{  }}>{item.price}</td>
        <td style={{  }}>{item.topic}</td>
        <td style={{  }}>{item.userId}</td>
        <td style={{  }}>{item.userName}</td>
        <td className="liked-icon" style={{ padding: "10px",}} onClick={likedEventHandler}>{item.liked ? "👍" : "👎"}</td>
        <td className="liked-icon" onClick={deleteEventHandler}>{"🗑️"}</td>
      </tr>
    );
  };
  
export default ShoppingitemRow;