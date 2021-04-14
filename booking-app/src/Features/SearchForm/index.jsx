import React from 'react';
import PropTypes from 'prop-types';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, CssBaseline, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import haircut from '../../Assets/Images/SVG/haircut.svg';
SearchForm.propTypes = {
    
};

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


function SearchForm(props) {
    const classes = useStyle();
    const handleOnChange = (e) => {
        console.log(e.target.value);
      };
    
    return (
        <div>
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
    );
}

export default SearchForm;