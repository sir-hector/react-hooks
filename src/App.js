import { createContext } from 'react';
import './App.css';
import { ComponentB } from './components/ComponentB';
import DataFetching from './components/DataFetching';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
export const ExampleContext = createContext()

function App() {
  return (
    <div className="App">
        <HookCounterUseEffect></HookCounterUseEffect>
        <MouseContainer/>
        <IntervalHookCounter/>
        <DataFetching/>
        <ExampleContext.Provider value={'Karol'}>
          <ComponentB/>
        </ExampleContext.Provider>
    </div>
  );
}

export default App;
