import { useState } from 'react';
import Button from './Button';

export default function Counter({start, increase}) {
    
    const [number, setNumber] = useState(start || 0);

    return(
        <div className="Counter">
            <h3>Counter</h3>
            <p>{number}</p>
            <Button 
                text={"Increment"}
                onClick={()=> {
                     setNumber(number + (increase || 100));  // setNumber(number + (increase ? increase : 100));
                }}
            />
        </div>
    )
}