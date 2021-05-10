import { buttonStyle } from "./styles";

const NumberButton = ({ state, setState }, num) =>
    <button
        style={ buttonStyle } 
        onClick={
             () => setState({ ...state, num: state.num * 10 + num}) 
        }
    > { num } </button>

export default NumberButton;