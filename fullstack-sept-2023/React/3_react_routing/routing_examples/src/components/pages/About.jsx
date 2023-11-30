import React from 'react'
import Company from './Company';
import Career from './Career';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';

function About() {
  return (
    <>
      <Routes>
        <Route path="/company" element={<Company></Company>}></Route>
        <Route path="/career" element={<Career></Career>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default About