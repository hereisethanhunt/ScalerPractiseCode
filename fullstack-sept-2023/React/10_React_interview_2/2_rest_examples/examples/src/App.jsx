import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemoConcept from './components/UseMemo'
import UseCallbackConcept from './components/UseCallBack'
import CounterClass from './components/CounterClass';
function App() {


  return (
    <>
      {/* <UseMemoConcept></UseMemoConcept> */}
      <UseCallbackConcept></UseCallbackConcept>
      {/* <CounterClass></CounterClass> */}
    </>
  )
}

export default App
