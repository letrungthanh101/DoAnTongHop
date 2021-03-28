import logo from './logo.svg';
import './App.css';
import React, {useEffect }from "react"
import productApi from './Api/productApi';
function App() {

  useEffect( () => {
    const fetchProduct = async () =>{
      const params = {
        _limit:10
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    }
    fetchProduct();
  }, [])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
