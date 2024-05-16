import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shoppingitem from './Shoppingitem';

function App() {
  const [items, setItems] = useState([
    {
      id:"0",
      title:'Hello',
      bookId:"sss"
    },{
      id:"1",
      title:'Hello',
      bookId:"sss"
    }
  ]);

  const headers = [
    {
      text: "Name",
      value: "title"
    },
    {
      text: "Book ID",
      value: "bookId"
    }
  ];

  let shoppingItems = items.length > 0 && (
    <table style={{ margin:16, border: '1px solid black'}}>
      <thead>
        <tr>
          {headers.map((header, index) => 
            <th key={index} style={{ padding: '10px', border: '1px solid black'}}>{header.text}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {headers.map((header, index) => (
              <td key={index} style={{ padding: '10px', border: '1px solid black' }}>{item[header.value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <div className='App'>{shoppingItems}</div>
}

export default App;
