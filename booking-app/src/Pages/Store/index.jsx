import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import './store.scss';
import Barbershops from 'Components/Barbershops/index';
import BarbershopSkeletonList from 'Components/SkeletonListBarbershop/index';

function Store(props) {
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await firebase.database().ref('Stores');
        data.on('value', (snapshot) => {
          const store = snapshot.val();
          const values = Object.values(store);

          setStoreList(values);
          console.log(values);
        });
      } catch (error) {
        console.log('fail to fetch ', error.message);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container">
      <h3>Recently Viewed</h3>
      <h3>7 Store in Ho Chi Minh</h3>

      {loading ? <BarbershopSkeletonList data={storeList} /> : <Barbershops storeList={storeList} />}
    </div>
  );
}

export default Store;
