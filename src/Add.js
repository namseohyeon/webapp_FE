import React, { useState } from "react";

const Add = (props) => {
  const [item, setItem] = useState({title:"", price:"", topic:"",userId:"",userName:""})
  const addItem = props.addItem;


  const onButtonClick = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    addItem(item);
    setItem({title:"", price:"", topic:"",userId:"",userName:""});
    //const { name, value } = e.target;
    // setItem(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }));
  }
  const onInputChange = (e) =>{
    const { name, value } = e.target;
    setItem(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log({[name]: value});
  }
  return(
    <div className="container" style={{ padding: '20px'}}>
      <form className="search-form">
        <div className="form-group" style = {{margin:'10px'}}>
          <label htmlFor="title" style={{
          display: 'inline-block',
          width: '100px',
          textAlign: 'center',
          fontWeight: 'bold',
          }} >title:</label>
          <input type="text" id="title" name="title" onChange={onInputChange} value={item.title} />
        </div>
        <div className="form-group" style = {{margin:'10px'}}>
          <label htmlFor="price" style={{
          display: 'inline-block',
          width: '100px',
          fontWeight: 'bold',
          textAlign: 'center'}} >price:</label>
          <input type="number" id="price" name="price" onChange={onInputChange} value={item.price} />
        </div>
        <div className="form-group" style = {{margin:'10px'}}>
          <label htmlFor="topic" style={{
          display: 'inline-block',
          width: '100px',
          fontWeight: 'bold',
          textAlign: 'center'}}>topic:</label>
          <input type="text" id="topic" name="topic" onChange={onInputChange} value={item.topic} />
        </div>
        <div className="form-group" style = {{margin:'10px'}}>
          <label htmlFor="userId" style={{
          display: 'inline-block',
          width: '100px',
          fontWeight: 'bold',
          textAlign: 'center'}}>userName:</label>
          <input type="text" id="userName" name="userName" onChange={onInputChange} value={item.userName} />
        </div>
        <button className="action-button" style = {{margin:'10px'}} type="submit"  onClick={onButtonClick}>제품 추가</button>
      </form>
    </div>
  );
}

export default Add;