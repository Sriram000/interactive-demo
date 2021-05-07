import './App.css';
import Calculator from './components/calculator.js';
import Example from './components/example.js';

function App() {
  return (
    <div className="App">
      { Calculator() }
      { Example() }
    </div>
  );
}

export default App;
