import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import User from './pages/User';
import ProductDetails from './pages/ProductDetails';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import PaginationContext from './context/PaginationContext';

function App() {
  return (
    <>
      <PaginationContext>
        {/* convert to redux store - pagination */}
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/home" element={<Navigate to="/"></Navigate>}> </Route>

          <Route path="/cart" element={<Cart></Cart>}> </Route>
          <Route path="/user" element={<User></User>}> </Route>
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>

          <Route path="*" element={<NotFound></NotFound>}> </Route>

        </Routes>
      </PaginationContext>
    </>
  )
}

export default App
