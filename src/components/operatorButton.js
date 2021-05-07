import ops from '../services/operations';

const OperatorButton = ({ state, setState }, op) =>
    <button onClick={ () => setState({
            res: ops[state.op](state.res, state.num),
            num: 0,
            op: op,
        })}
    > { op } </button>

export default OperatorButton;