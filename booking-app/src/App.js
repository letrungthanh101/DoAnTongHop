import firebase from 'firebase';

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Login from '../src/Features/Auth/Login';
import SignUp from '../src/Features/Auth/SignUp';
import Blog from '../src/Pages/Blog';
import Booking from '../src/Pages/Booking';
import Home from '../src/Pages/Home';
import Owner from '../src/Pages/Owner';
import Store from '../src/Pages/Store';
import productApi from './Api/productApi';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://flutterapp-a5eb3.firebaseio.com',
  projectId: 'flutterapp-a5eb3',

  // ...
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      // setIsSignedIn(!!user);
      if (!user) {
        console.log('user is not logged in');
        return;
      }
      console.log('Logged in user', user.displayName);

      const token = await user.getIdToken();
      console.log('Logged in user token', token);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
   
    <div className="App">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />

      <Switch>
        <Route path="/store" component={Store} />
        <Route path="/booking" component={Booking} />
        <Route path="/blog" component={Blog} />
        <Route path="/owner" component={Owner} />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
      </Switch>
      {/* {storeList.map((item)=>{
        return <li>{item.Address}</li>
      })} */}
      <Footer />
    </div>
  );
}

export default App;
