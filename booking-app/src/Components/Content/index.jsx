import React from 'react';
import PropTypes from 'prop-types';
import logo3 from "../../Assets/Images/SVG/logo3.svg"
Content.propTypes = {};

function Content(props) {
  return (
    <div className="content">
      <div className="row">
          <div className="content-item">
              <img src={logo3} alt="photo"/>
          </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-3">

          </div>
          <div className="col-md-3">

          </div>
          <div className="col-md-3">

          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Content;
