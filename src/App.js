import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ShoppingitemRow from './Shoppingitem';
import ShoppingitemColumm from './ShoppingitemColumm';
import Search from './Search';
import Modify from './Modify';
import Add from './Add';
import Delete from './Delete';
import Bar from './Bar';
import { Container, AppBar, Toolbar, Grid, Typography, Button } from '@mui/material';
import { call } from './ApiService';
import { signout } from './ApiService';


function App() {
  const [items, setItems] = useState([]);
  const [LikeItems, setLikeItems] = useState([]);
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
  // const handleLiked = (itemId) => {
  //   const updatedItems = items.map((item) =>
  //     item.id === itemId ? { ...item, liked: !item.liked } : item
  //   );
  //   setItems(updatedItems);
  // };

  const LikedItems = () => {
    call("/shopping/like", "GET", null) // liked가 true인 아이템을 가져오는 API 요청
      .then((response) => {
        if (response && response.data) {
          setLikeItems(response.data);
        } else {
          console.error("Invalid response structure1:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching liked items:", error);
      });
  };

  const ItemsOrderByPrice = () => {
    call("/shopping/orderedByPrice", "GET", null) // liked가 true인 아이템을 가져오는 API 요청
      .then((response) => {
        if (response && response.data) {
          setLikeItems(response.data);
        } else {
          console.error("Invalid response structure1:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching liked items:", error);
      });
  };
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

  const likeModifyItem = async (item) => {
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
    }

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
  
const showRenderComponent = () => {
  switch (showComponent) {
    case 1:
      return <Add addItem={addItem} className="add-component" />;
    case 2:
      return <Search searchItem={searchItem} className="search-component" />;
    case 3:
      return <Modify searchItem={searchItem} modifyItem={modifyItem} className="modify-component" />;
    case 4:
      return <Delete deleteItem={deleteItem} className="delete-component" />;
    default:
      return <Add addItem={addItem} className="add-component" />;
  }
}


  let shoppingItems = items?.length > 0 && (
    <table style={{width:"100%" }}>
      <thead>
        <ShoppingitemColumm />
      </thead>
      <tbody>
        {items?.map((item)=>(<ShoppingitemRow key={item.id} item={item} likeModifyItem={likeModifyItem} deleteItem={deleteItem} />))}
      </tbody>
    </table>
  );

  let likedItems = LikeItems?.length > 0 && (
    <table style={{ width: "100%" }}>
      <thead>
        <ShoppingitemColumm />
      </thead>
      <tbody>
        {LikeItems.map((item) => (
          <ShoppingitemRow key={item.id} item={item} likeModifyItem={likeModifyItem} deleteItem={deleteItem} />
        ))}
      </tbody>
    </table>
  );


  return( 
  <div className='App'>
      <Bar />
    <div className="button-container">
      <button className="action-button" onClick={() => setShowComponent(1)}>추가</button>
      <button className="action-button" onClick={() => setShowComponent(2)}>검색</button>
      <button className="action-button" onClick={() => setShowComponent(3)}>수정</button>
      <button className="action-button" onClick={() => setShowComponent(4)}>삭제</button>
    </div>
    <Container maxWidth="md" className="component-container">
      {showRenderComponent()}
    </Container>
    <div>
    <button style={{margin:"30px 10px 10px 0px"}} className="action-button" onClick={ItemsOrderByPrice}>
          가격순으로 정렬
    </button>
    <button style={{margin:"30px 0px 10px 10px"}} className="action-button" onClick={LikedItems}>
          좋아요 한 아이템 조회
    </button>
    </div>
    <div className="shopping-items">
      {likedItems}
    </div>
    <h2 style={{marginTop:"50px"}}>전체 리스트</h2>
    <div className="shopping-items">
      {shoppingItems}
    </div>
  </div>
  
  )
}

export default App;
