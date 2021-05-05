import React, { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [state, setState] = useState({ count: 0 });
    const addOne = () => {
          setState({count: state.count + 1});
    }
    const addTwo = () => {
        setState({count: state.count + 2});
    }

    return (
        <div>
            <p>You clicked { state.count } times</p>
            <button onClick={ addOne }> Add one </button>
            <button onClick={ addTwo }> Add two </button>
        </div>
        );
    }
    
    export default Example;