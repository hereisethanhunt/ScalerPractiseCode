import './App.css';
import { useState, lazy, Suspense, } from "react";
import { Route, Routes } from "react-router-dom";
// import posts from './posts.js';

// import About from './pages/About';
// import Products from './pages/Product';
// import Navbar from './component/Navbar';
// import Home from './pages/Home';

// const About = lazy(() => { return import("./pages/About") });
// const Products = lazy(() => { return  import("./pages/Product") });
// const Navbar = lazy(() => { return  import("./component/Navbar") });
// const Home = lazy(() => { return  import("./pages/Home") });

function App() {

  const [Iposts, setIPosts] = useState([]);
  const handleClick = () => {

    // setIPosts(posts);
    // dynmaic import
    import("./posts.js").then((module) => {
      console.log(module);
      setIPosts(module.default);
    })
  }

  return (
    <>
      <h1>I am App</h1>
      <button onClick={handleClick}> Add Image</button>
      <ul >{
        Iposts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>
        })
      }</ul>


      {/* <Suspense fallback={<h2>...Loading</h2>}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </Suspense> */}

    </>
  );
}

export default App;
