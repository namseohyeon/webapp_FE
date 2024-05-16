import React, { useState } from "react";
const Search = () => {
    return(
        <div className="container" style={{ padding: '20px', border: '2px solid black'}}>
          <form className="search-form">
            <div className="form-group" style = {{margin:'10px'}}>
              <label htmlFor="title" style={{
              display: 'inline-block',
              width: '100px',
              textAlign: 'center'}} >title:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="form-group" style = {{margin:'10px'}}>
              <label htmlFor="author" style={{
              display: 'inline-block',
              width: '100px',
              textAlign: 'center'}} >author:</label>
              <input type="text" id="author" name="author" />
            </div>
            <div className="form-group" style = {{margin:'10px'}}>
              <label htmlFor="publisher" style={{
              display: 'inline-block',
              width: '100px',
              textAlign: 'center'}}>publisher:</label>
              <input type="text" id="publisher" name="publisher" />
            </div>
            <div className="form-group" style = {{margin:'10px'}}>
              <label htmlFor="userId" style={{
              display: 'inline-block',
              width: '100px',
              textAlign: 'center'}}>userId:</label>
              <input type="text" id="userId" name="userId" />
            </div>
            <button style = {{margin:'10px'}} type="submit" className="search-button">제품 검색</button>
          </form>
        </div>
      );
    }
    
export default Search;