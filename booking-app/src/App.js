import firebase from 'firebase';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
// import Login from '../src/Features/Auth/Login';
// import Blog from '../src/Pages/Blog';
// import Booking from '../src/Pages/Booking';
// import Home from '../src/Pages/Home';
// import Owner from '../src/Pages/Owner';
// import Store from '../src/Pages/Store';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import SignUp from './Features/Auth/Signup'


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

  const Home = React.lazy(() => import('./Pages/Home'));
  const Store = React.lazy(() => import('./Pages/Store'));
  const Booking = React.lazy(() => import('./Pages/Booking'));
  const Blog = React.lazy(() => import('./Pages/Blog'));
  const Owner = React.lazy(() => import('./Pages/Owner'));
  const Login = React.lazy(() => import('./Features/Auth/Login'));
  const SignUp = React.lazy(() => import('./Features/Auth/Signup'));

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
      <React.Suspense fallback={<p>Loading...</p>}>
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
      </React.Suspense>
      {/* {storeList.map((item)=>{
        return <li>{item.Address}</li>
      })} */}
      <Footer />
    </div>
  );
}

export default App;
