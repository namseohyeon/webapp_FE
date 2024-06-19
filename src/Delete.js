import React, { useState } from "react";
const Delete = (props) => {
  const [item, setItem] = useState({title:""})
  const onInputChange = (e) =>{
    setItem({title:e.target.value});
    console.log(item);
  }

  const deleteItem = props.deleteItem;
  const deleteEventHandler = (e) => {
    e.preventDefault();
    deleteItem(item);
    setItem({title:""});
    console.log(item);
  }

  
  return (
    <div className="container" style={{ padding: '20px'}}>
      <form className="search-form">
        <div className="form-group" >
          <label htmlFor="title" style={{
          display: 'inline-block',
          width: '100px',
          fontWeight: 'bold',
          textAlign: 'center'}} >title:</label>
          <input type="text" id={item.id} name ={item.id} value={item.title} onChange={onInputChange} />
        </div>
        <button style = {{margin:'10px'}} type="submit" className="action-button" onClick={deleteEventHandler}>제품 삭제</button>
      </form>
    </div>
  );}

export default Delete;