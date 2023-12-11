import './App.css';
import Counter from './components/useStateExample';
import Form from './components/Form';
import UseReducerWithContext from './components/UseReducerWithContext';
import CounterUseReducer from './components/useReducer';

function App() {
  return (
    <>
      <h2>Use state Example</h2>
      <Counter></Counter>
      <h2>Use reducer Example</h2>
      {/* <CounterUseReducer></CounterUseReducer> */}
      {/* <Form></Form> */}
      {/* <UseReducerWithContext></UseReducerWithContext> */}
    </>
  )
}

export default App
