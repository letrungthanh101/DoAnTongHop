import { IconButton } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import Images from '../../Constants/Images';
import './form-booking.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
  button: {
    padding: '0px',
    
  },
  highlight: {
    color: '#ED6300',
    paddingLeft: '5px'
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
          <Link color="inherit" href="/">
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
              <h4>Liêm barbershop - 51 Đặng Dung, District 1</h4>
              <div className="barber__info">
                <div className="barber__item barber__item-1">
                  <img src={Images.img_calendar} alt="photo" className="svg--small" />
                  <span>9.00AM - 9.00PM</span>
                </div>
                <div className="barber__item barber__item-2">
                  <img src={Images.img_phone} alt="photo" className="svg--small" />
                  <span>028.3517.2701</span>
                </div>
                <div className="barber__item barber__item-3">
                  <img src={Images.img_store} alt="photo" className="svg--small" />
                  <span>OPEN</span>
                </div>
                <div className="barber__item barber__item-4">
                  <span style={{ padding: '0px 15px 0px 0px' }}>Ratting: </span>
                  <img src={Images.img_star} alt="photo" className="svg--small svg__star--small" />
                </div>
              </div>
              <div className="barber__coupon">
                <div className="barber__content">
                  <p>FLASH SALE</p>
                  <p>Only 1 day left</p>
                </div>
                <div className="barber__coupon_info ">
                  <div className="barber__discount">
                    <span>Discount: </span>
                    <span className={classes.highlight}>20%</span>
                  </div>
                  <div className="barber__code">
                    <span>Code:</span>
                    <span  className={classes.highlight}>BOOKINGBARBER</span>
                  </div>
                </div>
                <div className="barber__user">
                  <p>NUMBER OF USER : 1</p>
                  <IconButton className={classes.button} >
                    <FileCopyIcon />
                  </IconButton>
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
