import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
// import Login from './Components/Login'
import Home from "./Components/Home/Home";
import Gallery from './Components/Gallery'
import ProductContainer from './Components/Products/ProductContainer'
import Contact from "./Components/Contact/Contact";
import RecipesContainer from "./Components/Recipes/RecipeContainer"

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={ProductContainer} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
