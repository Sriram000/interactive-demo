import NumberButton from './numberButton';
import OperatorButton from './operatorButton';

const components = {
    number: NumberButton,
    string: OperatorButton,
};

const Buttons = (context, keys) =>
    keys.map((key) => components[typeof key](context, key));

export default Buttons;