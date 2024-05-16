import React, { useState } from "react";
const Delete = () => {
  return (
    <div className="container" style={{ padding: '20px', border: '2px solid black' }}>
      <form className="search-form">
        <div className="form-group" >
          <label htmlFor="title" style={{
          display: 'inline-block',
          width: '100px',
          textAlign: 'center'}} >title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <button style = {{margin:'10px'}} type="submit" className="delete-button">제품 검색</button>
      </form>
    </div>
  );}

export default Delete;