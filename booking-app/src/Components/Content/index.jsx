import React from 'react';
import PropTypes from 'prop-types';
import logo3 from '../../Assets/Images/SVG/logo3.svg';
import './content.scss';

Content.propTypes = {};

function Content(props) {
  return (
    <div className="container content">
      <div className="row">
        <div className="content__item content__img">
          <img src={logo3} alt="photo" />
        </div>
        <div className="content__item  content__p">
          <h4>the best quality</h4>
          <p>
            Booking Barbershop is currently the number 1 online booking barbershop platform in Vietnam. With us, you
            have a great experience.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Content;
