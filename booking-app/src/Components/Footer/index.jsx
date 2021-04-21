import React from 'react';
import logo from "../../Assets/Images/SVG/logo.svg";
import Images from '../../Constants/Images';
import "./footer.scss"
export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-md-3 footer-item">
          <img src={logo} />
        </div>
        <div className="col-md-2 footer-item">
          <div>
            <h5>Policy</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-item">
        <div>
            <h5>About</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-item">
        <div>
            <h5>Co-operate</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 footer-item">
          <p>FOLLOW US</p>
          <div className="footer-thumbnail">
            <img src= {Images.img_facebook}  alt="photo" className="footer-icon"/>
            <img src= {Images.img_instagram}  alt="photo" className="footer-icon"/>
            <img src= {Images.img_printerest}  alt="photo" className="footer-icon"/>
          </div>
        </div>
      </div>
      
    </footer>

  );
}