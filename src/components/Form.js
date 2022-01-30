import { useState } from "react";

export default function Form(){

    const [state, setstate] = useState('test');
    
    const [title, setTitle] = useState(true);

    function changevalue(e) {
         setstate(e.target.value);
         console.log(state);
    }

    function formSubmit(e) { 
        e.preventDefault();
        alert('Form is submitted!');
    }

    function FormClicked() {
        // alert('Form clicked');
        if (title) {
            setTitle(false);
        }
        else {
            setTitle(true);
        }
        
    }

    const variable = true;
    
    return(
    <>
        {
            variable 
            ?  
            <form action='/Submitted_form' onSubmit={formSubmit}>
                {
                    title ?
                    <h2>Form Title</h2>
                    :null
                }
            <textarea />
                <br/>
                {/* {String(state)} */}
                <p>{state}</p>
                <br/>
                    <input 
                        value={state} 
                        onChange={changevalue}
                     />
                <br/>
            <button type="button" onClick={FormClicked}> Submit </button>
            {/* <button type="button" onClick={() => alert('Form clicked')}> Submit </button> */}
        </form>
            : <p>variable if False!</p> // null - თუ ფოლსის შემთხვევაში არაფერი არ უნდა გამოჩნდეს.
        }
        
    </>
    )
}
