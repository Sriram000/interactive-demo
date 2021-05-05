import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // console.log(count);
          setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ handleClick }>
            Click me
            </button>
        </div>
        );
    }
    
    export default Example;