import DateFnsUtils from '@date-io/date-fns';
import { Button, IconButton, Paper, TextField } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import 'date-fns';
import React from 'react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Images from '../../Constants/Images';
import './form-booking.scss';
import { cyan, grey, deepOrange, pink, purple, lime } from '@material-ui/core/colors';
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
    paddingLeft: '5px',
  },
  haircut: {
    color: theme.palette.getContrastText(grey[900]),
    width: '100px',
    margin: theme.spacing(1, 1, 1, 0),
    fontSize: '12px',
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
  curling: {
    color: theme.palette.getContrastText(cyan[700]),
    width: '100px',
    fontSize: '12px',
    margin: theme.spacing(1, 1, 1, 0),
    backgroundColor: cyan[700],
    '&:hover': {
      backgroundColor: cyan[400],
    },
  },
  straighten: {
    // color: theme.palette.getContrastText(deepOrange[400]),
    color: 'white',
    width: '100px',
    fontSize: '12px',
    margin: theme.spacing(1, 1, 1, 0),
    backgroundColor: deepOrange[400],
    '&:hover': {
      backgroundColor: deepOrange[500],
    },
  },
  massage: {
    color: 'white',
    backgroundColor: pink[600],
    margin: theme.spacing(1, 1, 1, 0),
    width: '100px',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
  dye: {
    color: 'white',
    backgroundColor: purple[600],
    margin: theme.spacing(1, 1, 1, 0),
    width: '100px',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  repair: {
    color: 'white',
    backgroundColor: lime[600],
    margin: theme.spacing(1, 1, 1, 0),
    width: '100px',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: lime[700],
    },
  },
  book: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    fontSize: '18px',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    padding: '0 30px',
    margin: '20px 0px',
  },
  advice: {
    color: theme.palette.getContrastText(grey[900]),

    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[900],
    },
    margin: '20px 0px',
  },
}));

FormBooking.propTypes = {};

function FormBooking(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
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
        <Swiper
          spaceBetween={5}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imageStore.map((item, index) => {
            return (
              <SwiperSlide className="content--img" key={index}>
                <img src={item} alt="img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
          <div className="col-md-6 col-lg-8">
            <div className="booking-info">
              <h4>Liêm barbershop - 51 Đặng Dung, District 1</h4>
              <Grid container className="barber__info">
                <Grid xs={6}>
                  <div className="barber__item barber__item-1">
                    <img src={Images.img_calendar} alt="photo" className="svg--small" />
                    <span>9.00AM - 9.00PM</span>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="barber__item barber__item-2">
                    <img src={Images.img_phone} alt="photo" className="svg--small" />
                    <span>028.3517.2701</span>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="barber__item barber__item-3">
                    <img src={Images.img_store} alt="photo" className="svg--small" />
                    <span>OPEN</span>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="barber__item barber__item-4">
                    <span style={{ padding: '0px 15px 0px 0px' }}>Ratting: </span>
                    <img src={Images.img_star} alt="photo" className="svg--small svg__star--small" />
                  </div>
                </Grid>
              </Grid>
              <div className="barber__info"></div>
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
                    <span className={classes.highlight}>BOOKINGBARBER</span>
                  </div>
                </div>
                <div className="barber__user">
                  <p>NUMBER OF USER : 1</p>
                  <IconButton className={classes.button}>
                    <FileCopyIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="barber__time">
              <div className="barber__time--left">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container >
                    <KeyboardDatePicker
                      disableToolbar
                      variant="outlined"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker"
                      value={selectedDate}
                      color="secondary"
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
              <div className="barber__time--flex">
                <div className="barber__status barber__status--full" >  </div>
                <p>Full</p>
                <div className="barber__status barber__status--available"></div>
                <p>Availability</p>
              </div>
              <div className="booking__time">
                     <div>
                       
                     </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-8 col-lg-4">
            <div className="form__booking">
              <form action="">
                <Grid>
                  <Grid xs={12} margin="normal">
                    <p>60.000++</p>
                  </Grid>

                  <Grid xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <KeyboardDatePicker
                          disableToolbar
                          variant="outlined"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker"
                          value={selectedDate}
                          color="secondary"
                          fullWidth
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                      <Grid>
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          label="Time picker"
                          fullWidth
                          color="secondary"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Person"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      color="secondary"
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Phone numbers"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid xs={12} container className="wrapper" style={{ marginLeft: '5px' }}>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.haircut}>Haircut</Button>
                    </Grid>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.curling}>Curling</Button>
                    </Grid>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.straighten}>Straighten</Button>
                    </Grid>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.massage}> Massage</Button>
                    </Grid>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.dye}>Hair dye</Button>
                    </Grid>
                    <Grid xs={6} md={6} lg={4}>
                      <Button className={classes.repair}>Hair Repair</Button>
                    </Grid>
                  </Grid>
                  <Grid XS={12}>
                    <Button fullWidth className={classes.book} color="primary" variant="outlined">
                      BOOK NOW
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Grid container xs={12} className="form__advice">
              <form action="" type="onSubmit">
                <Typography variant="h6" align="center">
                  Advice from the barbershop
                </Typography>
                <TextField label="Your name" variant="outlined" margin="normal" fullWidth color="secondary" />
                <TextField label="Your phone" variant="outlined" margin="normal" fullWidth color="secondary" />
                <Button variant="contained" margin="normal" fullWidth className={classes.advice}>
                  Advice free
                </Button>
              </form>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBooking;
