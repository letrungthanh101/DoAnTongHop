import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import logo from '../../Assets/Images/logo.svg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Menu } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Link, NavLink } from 'react-router-dom';
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
});

function Header(props) {
  const classes = useStyles();
  return (
    <div>
      <header className="container-fluid">
        <nav className="nav d-flex ">
          <div className="top-nav top-nav--left">
            <ul className="top-nav__ul top-nav__ul--left ">
              <li>
                <NavLink to="/home" className="li__item  li__item--hover nav-item " activeClassName="active-menu">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/store" className="li__item  li__item--hover nav-item" activeClassName="active-menu">
                  STORE
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="li__item  li__item--hover nav-item" activeClassName="active-menu">
                  BOOKING
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="top-nav--middle logo">
            <Link to="/home" exact>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className=" top-nav top-nav--right">
            <ul className="top-nav__ul  top-nav__ul--right ">
              <li>
                <NavLink to="/blog" className="li__item  li__item--hover nav-item " activeClassName="active-menu">
                  BLOG
                </NavLink>
              </li>
              <li>
                <NavLink to="/owner" className="li__item  li__item--hover nav-item" activeClassName="active-menu">
                  FOR OWNER
                </NavLink>
              </li>
              <li className="nav-item">
                <Button className={classes.root} startIcon={<PersonIcon />}>
                  <Link to="/login">LOGIN</Link>
                </Button>
                ;
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
