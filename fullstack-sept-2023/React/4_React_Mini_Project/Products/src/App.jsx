import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
      </Routes>
  )
}

export default App
