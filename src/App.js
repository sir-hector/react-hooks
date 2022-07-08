import './App.css';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
        <HookCounterUseEffect></HookCounterUseEffect>
        <MouseContainer/>
        <IntervalHookCounter/>
    </div>
  );
}

export default App;
