import React from 'react';


import logo from "../../Assets/Images/SVG/logo.svg";
import facebook from "../../Assets/Images/SVG/facebook.svg"

import instagram from "../../Assets/Images/SVG/instagram.svg"
import printerest from "../../Assets/Images/SVG/pinterest.svg"
import "./footer.scss"

export default function Footer() {


  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-md-3 footer-item">
          <img src={logo} alt=""/>
        </div>
        <div className="col-md-2 footer-item">
          <div>
            <h5>Policy</h5>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-item">
        <div>
            <h5>About</h5>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 footer-item">
        <div>
            <h5>Co-operate</h5>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Gallery</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 footer-item">
          <p>FOLLOW US</p>
          <div className="footer-thumbnail">
            <img src= {facebook}  alt="photo" className="footer-icon"/>
            <img src= {instagram}  alt="photo" className="footer-icon"/>
            <img src= {printerest}  alt="photo" className="footer-icon"/>
          </div>
        </div>
      </div>
      
    </footer>

  );
}