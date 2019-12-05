import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from "./Components/Home/Home";
import Gallery from './Components/Gallery'
import Products from './Components/Products.js'
import AboutOwner from "./Components/About/AboutOwner";
import Contact from "./Components/Contact/Contact";
import Recipes from "./Components/Recipes/Recipes"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutOwner} />
        <Route exact path="/menu" component={Products} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Login />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
