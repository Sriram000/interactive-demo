import React, { useState } from 'react';

const Calculator = () => {  
    const [state, setState] = useState({ num: 0, op: "", res: 0 });
    const changNum =  (num) => setState({ ...state, num });
    const resetNum = () => changNum(0);
    const getChangeNum = (num) => () => changNum(state.num * 10 + num);
    const getChangeOp = (op) => () => {

        setState({
            res: add(state.res, state.num),
            num: 0,
            op: op,
        });

    }

    const add = (num1, num2) => num1 + num2;
 
    return (
        <div>
          <p> Result:{ state.res } Num:{ state.num } Op:{ state.op } </p>
          <div>
            <button onClick = { getChangeNum(1) }> 1 </button>
            <button onClick = { getChangeNum(2) }> 2 </button>
            <button onClick = { getChangeNum(3) }> 3 </button>
            <button onClick = { getChangeOp("+") }> + </button>
          </div>
          <div>
            <button onClick = { getChangeNum(4) }> 4 </button>
            <button onClick = { getChangeNum(5) }> 5 </button>
            <button onClick = { getChangeNum(6) }> 6 </button>
            <button onClick = { getChangeOp("-") }> - </button>
          </div>
          <div>
            <button onClick = { getChangeNum(7) }> 7 </button>
            <button onClick = { getChangeNum(8) }> 8 </button>
            <button onClick = { getChangeNum(9) }> 9 </button>
            <button onClick = { getChangeOp("*") }> * </button>
          </div>
          <div>
            <button onClick = { resetNum }> C </button>
            <button onClick = { getChangeNum(0) }> 0 </button>
            <button onClick = { getChangeOp("/") }> / </button>
          </div>
        </div>
    );
}

export default Calculator;
