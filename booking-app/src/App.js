import { unwrapResult } from '@reduxjs/toolkit';
import NotFound from 'Components/NotFound';
import { login } from 'Features/Auth/userSlice';
import firebase from 'firebase';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
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
      // const submitForm = await firebase.database().ref('Users');
      // submitForm.push();
      // submitForm.set({
      //   name: user.displayName,
      //   password: user,
      // });

      const token = await user.getIdToken();
      const userName = await user.displayName;
      // getIdToken auto refesh
      console.log('Logged in user token', );

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
      
        <Redirect path="/home" to="/" component={Home} exact />

        {/* <AuthProvider> */}
        <Switch>
        <Route path="/" component={Home} exact />
          <Route path="/store" component={Store} />
          <Route path="/booking" component={Booking}  />
          <Route path="/blog" component={Blog} />
          <Route path="/owner" component={Owner} />

          <Route path="/sign-up" component={SignUp} exact />

          <Route path="/login" component={Login} exact />
          <Route component={NotFound}/>
        </Switch>
        {/* </AuthProvider> */}
      </React.Suspense>

      <Footer />
    </div>
  );
}

export default App;
