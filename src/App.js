import logo from './logo.svg';
import './App.css';
import DisplayCounter from './components/DisplayCounter';
import Buttons from './components/Buttons';
import { useDispatch } from 'react-redux';

function App() {


  return (
    <div className="App">
      <DisplayCounter />
      <Buttons />
    </div>
  );
}

export default App;
