import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState } from 'react'; 


function App() {
  const [count, setCount] = useState(0);

  const name = "Wichayawan";

  const employee = [
    { name: "ratcha", email: "wichayawan.au@ksu.ac.th", age: 21},
    { name: "chai", email: "wichayawan.au@ksu.ac.th", age: 55},
    { name: "aupaluk", email: "wichayawan.au@ksu.ac.th", age: 21}
  ]

  console.log(employee);
  

  return (
    <>
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Const ++</button>
      <button onClick={() => setCount(count - 1)}>Const --</button>

      {employee.map((em, index) => (
        <li key={index}> 
        ชื่อพนักงาน: {em.name} อีเมล: {em.email} อายุ: {em.age} 
        </li>
      ))}

      <h1> Hello {name} </h1>
      <Button text = "OK" />
      <Button text = "Cancel" />
    </div>
    <h2 className="test">Test</h2>

    </>
  );
}

export default App;
