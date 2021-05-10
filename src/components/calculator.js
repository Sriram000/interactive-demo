import React, { useState } from 'react';
import Buttons from './buttons';
import { buttonStyle } from './styles';

const style = {
  ...buttonStyle,
  backgroundColor: "red",
  color: "white",
};


const Calculator = () => {  
    const [state, setState] = useState({ num: 0, op: "+", res: 0 });
    const context = {state, setState};

    const reset = () => setState({ num: 0, op: "+", res: 0 });
  
    return (
        <div>
          <p> Result:{ state.res } Num:{ state.num } Op:{ state.op } </p>
          <div>{ Buttons(context, [1, 2, 3, '+']) }</div>
          <div>{ Buttons(context, [4, 5, 6, '-']) }</div>
          <div>{ Buttons(context, [7, 8, 9, '*']) }</div>
          <div>
            <button
              style = { style }
              onClick = { reset }> C </button>
            { Buttons(context, [0, '%', '/']) }
          </div>
        </div>
    );
}

export default Calculator;
