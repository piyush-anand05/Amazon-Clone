import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Fragment> <Header /><Checkout /></Fragment>}>
            
          </Route>
          <Route path="/login" element={<Fragment> <Login /></Fragment>}>
            
          </Route>
          

          <Route path="/" element={<Fragment><Header /><Home /></Fragment>}>
          </Route>
         
            
        </Routes>
      </div>
        
    </Router>
  );
}

// We need react

// {localhost.com}
// {localhost.com/checkout}
// { localhost.com/login}

export default App;
