import React from 'react'
import {Route, Routes, Link, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import EachListing from '../pages/EachListing';
import NotFound from '../pages/NotFound';
import About from '../pages/About';

// nested Routes
// redirection Routes
// apply the routing in a ecommerce kind website 

function Routing() {
  return (
    <>
      {/* <SideBar/>
      <TopBar/> */}
        <div>Header</div>
        <ul>
            <li><Link to="/home" >Home Page </Link></li>
            {/* <li><a href="/home" >Home Page </a></li> */}
            <li><Link to="/listing" >Listing Page </Link></li>
        </ul>


        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/* <Route path="/home" element={<Home></Home>}></Route> */}
            <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
            {/* nested routes */}
            <Route path="/about/*" element={<About></About>}></Route>
            <Route path="/listing" element={<Listing></Listing>}></Route>
            {/* dynamic routing */}
            <Route path="/listing/:id" element={<EachListing></EachListing>}></Route>
            <Route path="/listing/:id/:name" element={<EachListing></EachListing>}></Route>
            {/* wild card path */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

        <div>Footer</div>

    </>
  )
}

export default Routing