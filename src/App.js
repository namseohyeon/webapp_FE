import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shoppingitem from './Shoppingitem';
import ShoppingitemRow from './Shoppingitem';

function App() {
  const [items, setItems] = useState([
    {
      id:"0",
      title:'Hello',

    },{
      id:"1",
      title:'Hello',

    }
  ]);

  const ShoppingitemRow = ({ item, onDelete }) => {
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

  const ShoppingitemColumm = ({ item, onDelete }) => {
    return (
      <tr>
        <th style={{ padding: '10px', border: '1px solid black' }}>id</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>title</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>삭제 버튼</th>
      </tr>
    );
  };

  let shoppingItems = items.length > 0 && (
    <table style={{ margin:16, border: '1px solid black'}}>
      <thead>
        <ShoppingitemColumm />
      </thead>
      <tbody>
        {items.map((item)=>(<ShoppingitemRow key={item.id} item={item} />))}
      </tbody>
    </table>
  );

  return <div className='App'>{shoppingItems}</div>
}

export default App;
