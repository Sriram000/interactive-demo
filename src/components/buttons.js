import NumberButton from './numberButton';
import OperatorButton from './operatorButton';

const components = {
    number: NumberButton,
    string: OperatorButton,
};

const Buttons = (context, keys) =>
    keys.map((key) => components[typeof key](context, key));

// const Buttons = (context, keys) => {

//     return (
//         <>
//         { NumberButton(context, 1) }
//         { NumberButton(context, 2) }
//         { NumberButton(context, 3) } 
//         { OperatorButton(context, '+') }
//         </>
//     );
// }

export default Buttons;