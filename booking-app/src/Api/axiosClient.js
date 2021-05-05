import axios from "axios"
import firebase from "firebase"

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
    const currentUser = firebase.auth().currentUser;
    if(currentUser){
      const token =  await currentUser.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;