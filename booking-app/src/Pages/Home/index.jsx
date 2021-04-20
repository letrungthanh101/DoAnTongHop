import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.scss';
import { Button } from '@material-ui/core';
import Content from '../../Components/Content';
import Images from '../../Constants/Images';
import Footer from '../../Components/Footer';
import SearchForm from '../../Features/SearchForm';

import Carousel from '../../Components/Carousel';
Home.propTypes = {};

function Home(props) {
  return (
    <div className="wrapper">
      <div className="container-fluid bg--primary">
        <section className="booking container ">
          <div className="row d-flex justify-content-center booking--row ">
            <div className="col-md-6 col-12 col-lg-5 col-sm-10 ">
              <SearchForm />
            </div>
            <div className="col-md-12 col-12 col-lg-7 banner--none banner">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block  img-banner w-100"
                      src={Images.img_Banner}
                      alt="First slide"
                      style={{ height: '341px' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block  img-banner img-fluid  w-100"
                      src={Images.img_Banner1}
                      alt="Second slide"
                      style={{ height: '341px' }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block  img-banner img-fluid  w-100"
                      src={Images.img_Banner2}
                      alt="Third slide"
                      style={{ height: '341px' }}
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container section--margin-top ">
        <div className="d-flex justify-content mt-3">
          <h3>Welcome to</h3>
          <h3 className="h4--lobster">Booking Barbershop</h3>
        </div>
        <div>
          <p>Reservation, service and more experience Booking Barbershop</p>
          <p>
            <Link to="/login">Login</Link> or <Link to="/sign-up">Sign up</Link> o experience right now !
          </p>
        </div>
        <h3 className="title">Recently Viewed</h3>
        <div className="row content-item">
          <div className="col-md-3 col-5 barber-item  ">
            <img src={Images.img_LiemBarber} alt="photo" className="img-barber" />

            <div className="mt-2 info">
              <h5>Liêm barbershop</h5>
              <p>Become the real man</p>
              <Button variant="outlined" color="">
                Click
              </Button>
            </div>
          </div>
          <div className="col-md-3 col-5 barber-item ">
            <img src={Images.img_VuTriBarber} alt="photo" className="img-barber " />

            <div className="mt-2 info">
              <h5>Barbershop Vũ Trí</h5>
              <p>Become the real man</p>
              <Button variant="outlined">Click</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container section--margin-top">
       
        <Carousel />
      </section>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
