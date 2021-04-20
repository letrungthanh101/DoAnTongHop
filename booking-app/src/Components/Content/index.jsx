import React from 'react';
import Images from '../../Constants/Images';

import './content.scss';

function Content(props) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-4">
          <div className="content__item content__img">
            <img src={Images.img_logo} />
          </div>
          <div className="content__item  content__description">
            <h4>the best quality</h4>
            <p>
              Booking Barbershop is currently the number 1 online booking barbershop platform in Vietnam. With us, you
              have a great experience.
            </p>
          </div>
        </div>
        <div className="col-md-3  content__item  content__img--flex">
          <div>
            <img src={Images.img_qrcode}  className="img--med"/>
          </div>
          <div>
            <img src={Images.img_googleplay} className="img--small" />
            <img src={Images.img_appstore} className="img--small" />
          </div>
        </div>

        <div className="col-md-4 content__item_image">
          <img src={Images.img_showphone} />
        </div>
      </div>
    </div>
  );
}

export default Content;
