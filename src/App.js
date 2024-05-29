import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ShoppingitemRow from './Shoppingitem';
import ShoppingitemColumm from './ShoppingitemColumm';
import Search from './Search';
import Modify from './Modify';
import Add from './Add';
import Delete from './Delete';
import { Container } from '@mui/material';
import { call } from './service/ApiService';
function App() {
  const [items, setItems] = useState([]);
  const [showComponent, setShowComponent] = useState(1);
  useEffect(() => {
    call("/shopping", "GET", null)
      .then((response) => {
        if (response && response.data) {
          setItems(response.data);
        } else {
          console.error("Invalid response structure:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  // const ShoppingitemRow = ({ item, onDelete }) => {
  //   return (
  //     <tr >
  //       <td style={{ padding: '10px', border: '1px solid black' }}>{item.id}</td>
  //       <td style={{ padding: '10px', border: '1px solid black' }}>{item.title}</td>
  //       <td style={{ padding: '10px', border: '1px solid black' }}>
  //         {/* <button onClick={() => onDelete(todo.id)}>delete</button> */}
  //         <button>삭제</button>
  //       </td>
  //     </tr>
  //   );
  // };

  // const ShoppingitemColumm = ({ item, onDelete }) => {
  //   return (
  //     <tr>
  //       <th style={{ padding: '10px', border: '1px solid black' }}>id</th>
  //           <th style={{ padding: '10px', border: '1px solid black' }}>title</th>
  //           <th style={{ padding: '10px', border: '1px solid black' }}>삭제 버튼</th>
  //     </tr>
  //   );
  // };

  const addItem = (item) => {
    call("/shopping", "POST", item)
      .then((response) => {
        if (response) {
          setItems(response.data || response); // 수정된 부분
        } else {
          console.error("Invalid response structure1:", response);
        }
      })
      .catch((error) => {
        console.error("Error adding item:1", error);
      });
  };

  const deleteItem = (item) => {
    call("/shopping","DELETE",item)
    .then((response) => setItems(response?.data));
  };

  const modifyItem = (item) => {
    return call("/shopping", "PUT", item)
      .then((response) => {
        console.log(response);
        if (response && response.data) {
          setItems(response.data);
          return response.data;
        } else {
          console.error("Invalid response structure:", response);
          return null;
        }
      })
      .catch((error) => {
        console.error("Error modifying item:", error);
        return null;
      });
  };

  const searchItem = (title) =>{
    return call(`/shopping/search?title=${title}`, "GET", null)
    .then((response) => {
      if (response && response.data) {
        return response.data[0]; // Assuming response.data is an array
      } else {
        console.error("Invalid response structure:", response);
        return null;
      }
    })
    .catch((error) => {
      console.error("Error searching item:", error);
      return null;
    });
  }

  // const searchItem=(item)=>{
  //   const searchItems = items.filter(e=> e.title === item.title);
    
  // }
  
  const showRenderComponent = () =>{
    switch(showComponent){
      case 1:
        return <Add addItem={addItem} />
      case 2:
        return <Search searchItem={searchItem} />
      case 3:
        return <Modify searchItem={searchItem} modifyItem={modifyItem} />
      case 4:
        return <Delete deleteItem={deleteItem} />
      default:
        return <Add addItem={addItem} /> 
    }
  }

  let shoppingItems = items?.length > 0 && (
    <table style={{ margin:16, border: '1px solid black'}}>
      <thead>
        <ShoppingitemColumm />
      </thead>
      <tbody>
        {items?.map((item)=>(<ShoppingitemRow key={item.id} item={item} />))}
      </tbody>
    </table>
  );

  // let UI = (
  // <table>
  //   <tr><td style={{ padding: '10px' }}>
  //     <Add addItem={addItem} /></td><td style={{ padding: '10px'}}>
  //     <Search searchItem={searchItem} /></td>
  //   </tr>
  //   <tr><td style={{ padding: '10px'}}>
  //     <Modify modifyItem={modifyItem} searchItem={searchItem}/></td><td style={{ padding: '10px'}}>
  //     <Delete deleteItem={deleteItem} /></td>
  //     </tr>
  // </table>);

  return( 
  <div className='App'>
    <div style={{ margin:5 }}>
      <button onClick={() => setShowComponent(1)}>추가</button>
      <button onClick={() => setShowComponent(2)}>검색</button>
      <button onClick={() => setShowComponent(3)}>수정</button>
      <button onClick={() => setShowComponent(4)}>삭제</button>
    </div>
    <Container maxWidth="md">
      {showRenderComponent()}
    </Container>
    <div>
      {shoppingItems}
    </div>
  </div>
  )
}

export default App;
