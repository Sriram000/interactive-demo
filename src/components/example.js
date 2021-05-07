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

    const addX = (x) => { 
        return () => {
            setState({count: state.count + x});
    }}
    return (
        <div>
            <p>You clicked { state.count } times</p>
            <button onClick={ addOne }> Add one </button>
            <button onClick={ addTwo }> Add two </button>
            <button onClick={ addX(3) }> Add three </button>
            <button onClick={ addX(4) }> Add four </button>
        </div>
        );
    }
    
    export default Example;