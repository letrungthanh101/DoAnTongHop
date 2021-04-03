import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Button, Grid, MenuItem, Select } from '@material-ui/core';

import Carousel from 'react-elastic-carousel';

import banner from '../../Assets/Images/banner.jpg';
import banner1 from '../../Assets/Images/banner1.jpg';
import banner2 from '../../Assets/Images/banner2.jpg';
import './Home.scss';
Home.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    margin: '10px 25px ',
    width: '300px',
  },
  select: {
    width: '300px',
    margin: '10px 25px ',
  },
  textField: {
    padding: '10px 25px',
    width: '350px',
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    margin: '10px 25px',
    padding: '0 30px',
    width: '300px',
  },
  itme: {
    padding: theme.spacing(3),
  },
}));

function Home(props) {
  const classes = useStyle();

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container-fluid ">
      <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-12 col-lg-4 col-sm-8 ">
            <div className="form-booking form-group">
              <h4 className="text-center">BOOKING NOW </h4>
              <form action="" className ="d-flex justify-content-center flex-wrap">
                <div>
                  <TextField variant="outlined" className={classes.root} label="Search barbershop" />
                </div>
                <div>
                  <Select className={classes.select} defaultValue="Quận 1" onChange={handleOnChange} variant="outlined">
                    <MenuItem value={1}>Quận 1</MenuItem>
                    <MenuItem value={2}>Quận 2</MenuItem>
                    <MenuItem value={3}>Quận 3</MenuItem>
                    <MenuItem value={4}>Quận 4</MenuItem>
                    <MenuItem value={5}>Quận 5</MenuItem>
                  </Select>
                </div>
                <div>
                  <TextField
                    id="date"
                    variant="outlined"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>

                <Button variant="outlined" className={classes.btn}>
                  SEARCH
                </Button>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-12 col-lg-7 banner--none">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 img-banner" src= {banner} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-banner" src={banner1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-banner" src= {banner2} alt="Third slide" />
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
      </div>
    </div>
  );
}

export default Home;
