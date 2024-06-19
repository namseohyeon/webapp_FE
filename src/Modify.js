import React, { useState } from "react";

const Modify = (props) => {
  const [item, setItem] = useState({ title: "", price: "", topic: "", userid: "" })
  const modifyItem = props.modifyItem;
  const searchItem = props.searchItem;

  const onSearchButtonClick = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    //setItem({title:"", price:"", topic:"",userid:""});
    searchItem(item.title).then((data) =>{
      if(data){
        setItem(data);
      }
    })
  }
  const onModifyButtonClick = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    //setItem({title:"", price:"", topic:"",userid:""});
    modifyItem(item).then((data) =>{
      if(data){
        //setItem(data);
        console.log("Item modified successfully");
      }else{
        console.error("Failed to modify item");
      }});
    setItem({title:"", price:"", topic:"",userid:""});
  }

  
  const onInputChange = (e) =>{
    const { name, value } = e.target;
    //setItem({title:e.target.value});
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  
  return(
    <div className="container" style={{ padding: '20px'}}>
      <form className="search-form">
        <div className="form-group" style={{ margin: '10px' }}>
          <label htmlFor="title" style={{
            display: 'inline-block',
            width: '100px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>title:</label>
          <input type="text" id="title" name="title" onChange={onInputChange} value={item.title} />
        </div>
        <div className="form-group" style={{ margin: '10px' }}>
          <label htmlFor="price" style={{
            display: 'inline-block',
            width: '100px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>price:</label>
          <input type="number" id="price" name="price" onChange={onInputChange} value={item.price}  />
        </div>
        <div className="form-group" style={{ margin: '10px' }}>
          <label htmlFor="topic" style={{
            display: 'inline-block',
            width: '100px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>topic:</label>
          <input type="text" id="topic" name="topic" onChange={onInputChange} value={item.topic}  />
        </div>
        <div className="form-group" style={{ margin: '10px' }}>
          <label htmlFor="userid" style={{
            display: 'inline-block',
            width: '100px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>userid:</label>
          <input type="text" id="userid" name="userid" onChange={onInputChange} value={item.userid}  />
        </div>
        <button style={{ margin: '10px' }} type="button" className="search-button" onClick={onSearchButtonClick}>제품 검색</button>
        <button style={{ margin: '10px' }} type="button" className="search-button" onClick={onModifyButtonClick}>제품 수정</button>
      </form>
    </div>
  );
}

export default Modify;