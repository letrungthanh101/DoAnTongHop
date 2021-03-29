import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import productApi from './Api/productApi';

import { Redirect, Route, Switch } from 'react-router';

import Header from './Components/Header';

import Home from "../src/Pages/Home"
import Store from "../src/Pages/Store"
import Booking from "../src/Pages/Booking"
import Blog from "../src/Pages/Blog"
import Owner from "../src/Pages/Owner"

import Login from "../src/Features/Login"
import SignUp from "../src/Features/Signup"

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route path = "/" component={Home} exact/>
      <Route path = "/home" component={Home} />
    
      <Switch>
      <Route path = "/store" component={Store} />
      <Route path = "/booking" component={Booking} />
      <Route path = "/blog" component={Blog} />
      <Route path = "/owner" component={Owner} />
      <Route path = "/login" component={Login} exact />
      <Route path = "/sign-up" component={SignUp} exact />
      </Switch>
     
    </div>
  );
}

export default App;
