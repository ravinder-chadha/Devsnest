import './App.css';
import Header from './containers/header';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/productListing";
import ProductDetails from './containers/productDetails';

export default function app() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    );
}
