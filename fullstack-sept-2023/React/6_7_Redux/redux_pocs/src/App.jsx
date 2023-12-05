import './App.css'
import Counter from './components/normalComponents/Counter'
import CounterRedux from './components/reduxComponents/CounterRedux'
import TodoComponent from './components/reduxComponents/TodoComponent'

function App() {

  return (
    <>
      {/* <Counter/> */}
      {/* <CounterRedux></CounterRedux> */}
      <TodoComponent></TodoComponent>
    </>
  )
}

export default App
