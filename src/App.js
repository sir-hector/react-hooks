import './App.css';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
        <HookCounterUseEffect></HookCounterUseEffect>
        <MouseContainer/>
    </div>
  );
}

export default App;
