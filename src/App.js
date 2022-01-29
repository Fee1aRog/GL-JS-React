import logo from './logo.svg';
import './App.css';
import Button from './components/Button';


function App() {
  function example(){
  console.log('Image is clicked');
}
const colors= [
  'orange',
  'red',
  'black'
];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={example()}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button ragacaClass='Click' text='Click me'/>
        <Button text='Button 2'/>
        {
          colors.map((color, index)=>{
            return(
              <span key={index} styl>{color}</span>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
