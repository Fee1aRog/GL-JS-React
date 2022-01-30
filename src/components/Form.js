import { useState } from "react";

export default function Form(){

    const [state, setstate] = useState('test'); 

    function formSubmit(e) { 
        e.preventDefault();
        alert('Form is submitted!');
    }

    // function FormClicked() {
    //     alert('Form clicked');
    // }

    const variable = true;
    
    return(
    <>
        {
            variable ? <p>variable is True!</p> : <p>variable if False!</p> // null - თუ ფოლსის შემთხვევაში არაფერი არ უნდა გამოჩნდეს.
        }
        <form action='/Submitted_form' onSubmit={formSubmit}>
            <textarea />
            <br/>
            <input value={state} onChange={(e) => setstate(e.target.value)} />
            <br/>
            <button type="button" onClick={() => alert('Form clicked')}> Submit </button>
        </form>
    </>
    )
}