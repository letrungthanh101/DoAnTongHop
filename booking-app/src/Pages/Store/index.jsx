import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import './store.scss';
function Store(props) {
  const [storeList, setStoreList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await firebase.database().ref('Stores');
        data.on('value', (snapshot) => {
          const store = snapshot.val();
          for (let item in store) {
            storeList.push(store[item]);
          }
          setStoreList(storeList);
          console.log(storeList)
        });
      } catch (error) {
        console.log('fail to fetch ', error.message);
      }
    };
    fetchData();
  },[]);

  return (
    <div className="container">
      <h3>Recently Viewed</h3>
      
      <h3>7 Store in Ho Chi Minh</h3>
      <div className="store container">
        <div className="row">
          {storeList.map((store, index) => {
            return (
              <div key={index} className="col-md-3 store__item">
                <img src={store.Image} alt="photo-store" />
                <h5>{store.NameStore}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;
