import { buttonStyle } from "./styles";

const style = {
    ...buttonStyle,
    backgroundColor: "beige",
};


const NumberButton = ({ state, setState }, num) =>
    <button
        style={ style } 
        onClick={
             () => setState({ ...state, num: state.num * 10 + num}) 
        }
    > { num } </button>

export default NumberButton;