import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';


function App() {
//   function example(){
//   console.log('Image is clicked');
// }

const title = 'Main Title';

const colors= [
  'orange',
  'red',
  'black'
];

const comments = [
  {
    id: 1,
    text: 'comment 1'
  },
  {
    id: 2,
    text: 'comment 2'
  },
  {
    id: 3,
    text: 'comment 3'
  }
];

const nav=[
  'Home',
  'About',
  'Contact'
];

  return (
    <div className="App">
      <header className="App-header">
        <Form  />
{/* 
        {<img src={logo} className="App-logo" alt="logo" />}
        <h1>{title}</h1>
        

     <nav>
       <ul>
         {
          nav.map((li, index) => {
            return(
              <li key={index}>
                  {li}
              </li>
            )
          })
          }
      </ul>
     </nav>

        
        {
          comments
          .filter(item =>item.id < 3)
          .map(comment => {
            return (
              // <p key={comment.id}>
              //   {comment.text}
              // </p>
              <Button ragacaClass='Click' key={comment.id} text={comment.text}/>
            )
          })
        }


        <Button ragacaClass='Click' text='Click me'/>
        <Button text='Button 2'/>
       

        {
          colors.map((color, index)=>{
            return(
              <span key={index}>{color}</span>
            )
          })
        } */}

      </header>
    </div>
  );
}

export default App;
  