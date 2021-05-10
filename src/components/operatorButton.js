import ops from '../services/operations';
import { buttonStyle } from './styles';

const style = {
    ...buttonStyle,
    backgroundColor: "khaki",
};


const OperatorButton = ({ state, setState }, op) =>
    <button
    style={ style }
    onClick={ () => setState({
            res: ops[state.op](state.res, state.num),
            num: 0,
            op: op,
        })}
    > { op } </button>

export default OperatorButton;