import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Images from '../../Constants/Images';
import './form-booking.scss';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
    
  },
}));

FormBooking.propTypes = {};

function FormBooking(props) {
  const classes = useStyles();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imageStore = [
    Images.img_4rau,
    Images.img_August,
    Images.img_LiemBarber,
    Images.img_VuTriBarber,
    Images.img_hurricage,
    Images.img_shine30,
    Images.img_LiemBarber2,
    Images.img_LiemBarber3,
  ];
  return (
    <div>
      <div className="container-fluid content__slider">
        <Slider {...settings}>
          {imageStore.map((item, index) => {
            return (
              <div key={index} className="content--img">
                <img src={item} alt="img" style={{ position: 'relative' }} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="container">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" >
         
            Home
          </Link>
          <Link color="inherit" href="#">
            HCMC
          </Link>
          <Typography color="textPrimary">Liêm barbershop</Typography>
        </Breadcrumbs>
        <div className="row">
          <div className="col-md-6">
            <div className="booking-form">
              <h5>Liêm barber-shop - 51 Đặng Dung, District 1</h5>
              <div className="barberber__info">
                  <div>
                    <img src= {Images.img_calendar} alt="photo" className="svg--small"/>
                    <span>9.00AM - 9.00PM</span>
                  </div>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <form action="">
              <h6>60.000++</h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBooking;
