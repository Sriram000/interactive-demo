import React, { useState } from 'react';

const Calculator = () => {
    const [state, setState] = useState({ num: 0, op: "" });
    const getChangeNum = (num) => () => setState({ ...state, num });
    const getChangeOp = (op) => () => setState({ ...state, op });

    return (
        <div>
          <p> { state.num }  ({ state.op }) </p>
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
            <button onClick = { getChangeNum(0) }> C </button>
            <button onClick = { getChangeNum(0) }> 0 </button>
            <button onClick = { getChangeOp("/") }> / </button>
          </div>
        </div>
    );
}

export default Calculator;