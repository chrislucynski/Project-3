import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from "./Components/Home/Home";
import Gallery from './Components/Gallery'
import Products from './Components/Products'
import AboutOwner from "./Components/About/AboutOwner";
import Contact from "./Components/Contact/Contact";
import Recipes from "./Components/Recipes/RecipeContainer"

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
