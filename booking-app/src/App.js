import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'Features/Auth/userSlice';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useSnackbar } from 'notistack';
// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://flutterapp-a5eb3.firebaseio.com',
  projectId: 'flutterapp-a5eb3',
};

firebase.initializeApp(config);
function App() {
  const Home = React.lazy(() => import('./Pages/Home'));
  const Store = React.lazy(() => import('./Pages/Store'));
  const Booking = React.lazy(() => import('./Pages/Booking'));
  const Blog = React.lazy(() => import('./Pages/Blog'));
  const Owner = React.lazy(() => import('./Pages/Owner'));
  const Login = React.lazy(() => import('./Features/Auth/Login'));
  const SignUp = React.lazy(() => import('./Features/Auth/Signup'));
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) return;
      setUser(user.displayName);

      const token = await user.getIdToken();
      // getIdToken auto refesh
      console.log('Logged in user token', token);

      const action = await login;
      const actionResult = dispatch(action);
      const currentUser = unwrapResult(actionResult);
      enqueueSnackbar('Login success!', { variant: 'success' });
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <Header displayUser={user} />

      <React.Suspense fallback={<p>Loading...</p>}>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />

        <Switch>
          <Route path="/store" component={Store} exact />
          <Route path="/booking" component={Booking} exact />
          <Route path="/blog" component={Blog} />
          <Route path="/owner" component={Owner} />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={SignUp} exact />
        </Switch>
      </React.Suspense>
     
      <Footer />
    </div>
  );
}

export default App;
