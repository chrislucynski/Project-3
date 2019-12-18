import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from "./Components/Home/Home";
import Gallery from './Components/Gallery/Gallery'
import ProductContainer from './Components/Products/ProductContainer'
import ContactContainer from "./Components/Contact/ContactContainer";
import RecipesContainer from "./Components/Recipes/RecipeContainer"
// import StickyFooter from 'react-sticky-footer'


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className = "content">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={ProductContainer} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route path="/contact" component={ContactContainer} />
      </div>
        <Footer />
    </Router>
  );
}

export default App;
