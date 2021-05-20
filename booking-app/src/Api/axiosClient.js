import axios from "axios"
import firebase from "firebase"

const getFirebaseToken = async () =>{
  //kiem tra user co login chua
  const currentUser = firebase.auth().currentUser;
  if(currentUser) return currentUser.getIdToken();

  // user chua login
  const hasRememberedAccount=localStorage.getItem('firebaseui:hasRememberedAccounts');
  if(!hasRememberedAccount){
    return null
  }
  //logged but not current user is not fetched --> wait 10s
  return new Promise((resolve,reject)=>{
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      // setIsSignedIn(!!user);
     const waitTimer = setTimeout(()=>{
        reject('reject setTimeout');
      },10000)

      const token = await user.getIdToken();
      console.log("Axios logged in user token",token)
      resolve(token)
      //getIdToken auto refesh
      // console.log('Logged in user token', token);
      unregisterAuthObserver();
      clearTimeout(waitTimer)
    });
  })


}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_API,
    header:{
        'Content-type': 'application/json'
    }
});


//interceptors

// Add a request interceptor
axiosClient.interceptors.request.use(async function (config) {
    // Do something before request is sent
    // const currentUser = firebase.auth().currentUser;
    // if(currentUser){
    //   const token =  await currentUser.getIdToken();
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    // return config;
    const token = await getFirebaseToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response  && response.data){
      return response.data;
    }
   
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;