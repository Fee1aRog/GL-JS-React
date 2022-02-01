import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header';


function App() {

  const [inputValue, setInputValue] = useState(0);
  const [startValue, setStartValue] = useState();
  // console.log(inputValue);

  return (
    <div className="App">

      {/* <Header/>
      <Form  /> */}

      <input 
        type='number' 
        placeholder='Type number' 
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button >
        Change start value
      </button>
      <Counter start={startValue} increase={1} />
      <Counter increase={10} />
      <Counter start={100} />
    </div>
  );
}
export default App;
  