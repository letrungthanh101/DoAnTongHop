import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, CssBaseline, Grid, MenuItem, Select, Typography } from '@material-ui/core';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import LiemBarber from '../../Assets/Images/LiemBarber.jpg';
import VuTriBarber from '../../Assets/Images/VuTriBarber.jpg';
import banner from '../../Assets/Images/banner.jpg';
import banner1 from '../../Assets/Images/banner1.jpg';
import banner2 from '../../Assets/Images/banner2.jpg';
import shine30 from '../../Assets/Images/shine30.jpg';
import liembarber2 from '../../Assets/Images/liembarber2.jpg';
import recomend3 from '../../Assets/Images/recomend3.jpg';
import haircut from '../../Assets/Images/SVG/haircut.svg';

import Footer from '../../Components/Footer';

import './Home.scss';
import { Link } from 'react-router-dom';
import Content from '../../Components/Content';
Home.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    margin: '10px 25px ',
    width: '300px',
  },
  select: {
    // width: '300px',
    // margin: '10px 25px ',
  },
  textField: {
    // padding: '10px 25px',
    // width: '350px',
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    margin: '10px 0',
    // padding: '0 30px',
    // width: '300px',
  },
  item: {
    padding: theme.spacing(4),
  },
  paper: {
    // marginTop: theme.spacing(4),
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    backgroundColor: 'white',
  },
}));

function Home(props) {
  const classes = useStyle();

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="warper">
      <div className="container-fluid ">
        <section className="booking">
          <div className="row d-flex justify-content-center booking--row ">
            <div className="col-md-6 col-12 col-lg-5 col-sm-10 ">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <div className="d-flex ">
                    <img src={haircut} alt="photo" style={{ width: '30px', marginRight: '5px' }} />
                    <Typography component="h1" variant="h5">
                      BOOKING NOW
                    </Typography>
                  </div>

                  <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      label="Search barbershop"
                      name="search"
                      autoFocus
                    />
                    <Select
                      className={classes.select}
                      defaultValue="Quận 1"
                      onChange={handleOnChange}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      autoFocus
                    >
                      <MenuItem value={1}>Quận 1</MenuItem>
                      <MenuItem value={2}>Quận 2</MenuItem>
                      <MenuItem value={3}>Quận 3</MenuItem>
                      <MenuItem value={4}>Quận 4</MenuItem>
                      <MenuItem value={5}>Quận 5</MenuItem>
                    </Select>
                    <TextField
                      id="date"
                      variant="outlined"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      fullWidth
                      margin="normal"
                      autoFocus
                      placeholder=""
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Button type="submit" fullWidth variant="contained" className={classes.btn}>
                      SEARCH
                    </Button>
                  </form>
                </div>
              </Container>
            </div>
            <div className="col-md-12 col-12 col-lg-6 banner--none banner">
              <Container>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100 img-banner" src={banner} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 img-banner" src={banner1} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100 img-banner" src={banner2} alt="Third slide" />
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
              </Container>
            </div>
          </div>
        </section>

        <section className="content container">
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
          <div className="row">
            <div className="col-md-4 barber-item">
              <div className="img-barber">
                <img src={LiemBarber} alt="photo" className="img-barber" />
              </div>
              <div className="mt-2">
                <h5>Liêm barbershop</h5>
                <p>Become the real man</p>
              </div>
            </div>
            <div className="col-md-4  barber-item">
              <div className="img">
                <img src={VuTriBarber} alt="photo" className="img-barber " />
              </div>
              <div className="mt-2">
                <h5>Barbershop Vũ Trí</h5>
                <p>Become the real man</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-5">
          <h3>Outstanding barber shops</h3>
          <div className="owl-carousel">
            {/* <OwlCarousel className="owl-theme" loop margin={4} items="4" autoplay="true" nav dots>
            <div className="item">
              <img src={shine30} alt="photo" className="carousel--img" />
            </div>
            <div className="item">
              <img src={liembarber2} alt="photo" className="carousel--img" />
            </div>
            <div className="item">
              <img src={LiemBarber} alt="photo" className="carousel--img" />
            </div>
            <div className="item">
              <img src={recomend3} alt="photo" className="carousel--img" />
            </div>
          </OwlCarousel> */}
          </div>
        </section>
        <Content />
        <Footer/>
      </div>
     
    </div>
  );
}

export default Home;
