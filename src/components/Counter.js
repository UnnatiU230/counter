import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    if (errorMessage) {
      setErrorMessage('Counter cannot be negative!');
    }

  };

    
  const zero= () => {
    if (count === 0) {
      setErrorMessage('Counter cannot be negative!');
    } 
  };

  return (
    <div style={{width:'400px',height:'400px', color:'white',backgroundColor:'black'}}>
      <h2 >Counter Using React</h2>
      <span>{count}</span>
      <br>

      </br>

      
      
      <button onClick={increment} style={{width:'100px', height:'40px', backgroundColor:'white'}}>Increment</button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <button onClick={decrement} style={{width:'100px', height:'40px', backgroundColor:'white'}}>Decrement</button>
      <button onClick={zero} style={{width:'100px', height:'40px', backgroundColor:'white'}}>Zero</button>
    </div>
  );
}

export default Counter;


