import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import firebase from 'firebase';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink,hi } from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';
import { useSnackbar } from 'notistack';

import './header.scss';

Header.propTypes = {};
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    padding: '0 30px',
  },
  btn: {
    color: 'white',
  },
  paper: {
    marginRight: '2',
  },
  zIndex:{
    zIndex: 1400
  }
});
function Header(props) {
  const { displayUser } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = () =>{
    const logOut = firebase.auth().signOut();
    console.log("logout success",logOut);
 
    return logOut;
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg  ">
          <div className="top-nav--middle logo-brand">
            <Link to="/home" exact>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <IconButton
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon className={classes.btn} />
          </IconButton>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto navbar-flex">
              <li className="nav-item ">
                <Button>
                  <NavLink to="/" className="li__item  li__item--hover  " activeClassName="active-menu">
                    HOME
                  </NavLink>
                </Button>
              </li>
              <li className="nav-item">
                <Button>
                  <NavLink to="/store" className="li__item  li__item--hover " activeClassName="active-menu">
                    STORE
                  </NavLink>
                </Button>
              </li>
              <li className="nav-item">
                <Button>
                  <NavLink to="/booking" className="li__item  li__item--hover " activeClassName="active-menu">
                    NEWS
                  </NavLink>
                </Button>
              </li>
            </ul>
            <div className="top-nav--middle logo  m-auto navbar-flex">
              <Link to="/home" exact>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="navbar-nav m-auto navbar-flex">
              <li className="nav-item">
                <Button>
                  <NavLink to="/blog" className="li__item  li__item--hover " activeClassName="active-menu">
                    BLOG
                  </NavLink>
                </Button>
              </li>
              <li className="nav-item">
                <Button>
                  <NavLink to="/owner" className="li__item  li__item--hover " activeClassName="active-menu">
                    FOR OWNER
                  </NavLink>
                </Button>
              </li>
              <li className="nav-item ">
                {displayUser ? (
                  <div>
                    <Button
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                      className={classes.btn}
                    >
                     <Link to="/"  className="li__item  li__item--hover " >  Hello ! {displayUser} </Link>
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper className={classes.zIndex}>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                ) : (
                  <div>
                    <Button className={classes.root} startIcon={<PersonIcon />}>
                      <Link to="/login">LOGIN</Link>
                    </Button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
