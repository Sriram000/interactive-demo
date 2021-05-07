const NumberButton = ({ state, setState }, num) =>
    <button 
        onClick={
             () => setState({ ...state, num: state.num * 10 + num}) 
        }
    > { num } </button>

export default NumberButton;