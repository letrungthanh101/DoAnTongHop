import React from 'react';
import fetchBarbershop from "./barbershopSlice"
function Barbershops(props) {
    const {storeList} = props
  return (
    <div>

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

export default Barbershops;
