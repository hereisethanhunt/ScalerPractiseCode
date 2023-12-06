import './App.css'
import Counter from './components/normalComponents/Counter'
import CounterRedux from './components/reduxComponents/CounterRedux'
import TodoComponent from './components/reduxComponents/TodoComponent'
import UserRedux from './components/reduxComponents/UserRedux'

function App() {

  return (
    <>
      {/* <Counter/> */}
      <CounterRedux></CounterRedux>
      <TodoComponent></TodoComponent>
      <UserRedux></UserRedux>
    </>
  )
}

export default App
