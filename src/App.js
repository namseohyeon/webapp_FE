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

  let shoppingItems = items.length > 0 && (
    <table style={{ margin:16, border: '1px solid black'}}>
      <thead>
        <tr>
          <th style={{ padding: '10px', border: '1px solid black' }}>id</th>
          <th style={{ padding: '10px', border: '1px solid black' }}>title</th>
          <th style={{ padding: '10px', border: '1px solid black' }}>삭제 버튼</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item)=>(<ShoppingitemRow key={item.id} item={item} />))}
      </tbody>
    </table>
  );

  return <div className='App'>{shoppingItems}</div>
}

export default App;
