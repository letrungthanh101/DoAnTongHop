import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import './carousel.scss';
import Images from '../../Constants/Images';
Slide.propTypes = {};

function Slide(props) {
  const barberItem = [
    { id: 1, images: Images.img_LiemBarber, title: 'Liêm Barbershop', sl: '20 Store' },
    { id: 2, images: Images.img_VuTriBarber, title: 'Vũ Trí Barbershop', sl: '20 Store' },
    { id: 3, images: Images.img_4rau, title: '4 Râu Barbershop', sl: '20 Store' },
    { id: 4, images: Images.img_shine30, title: '30 Shine store', sl: '20 Store' },
    { id: 5, images: Images.img_August, title: 'August Barbershop', sl: '20 Store' },
    { id: 6, images: Images.img_hurricage, title: 'Hurricage Barbershop', sl: '20 Store' },
  ];

  const couponItem = [
    { id: 1, images: Images.img_Banner1 },
    { id: 2, images: Images.img_Banner2 },
    { id: 3, images: Images.img_uudai },
  ];
  const recommendItem = [
    {
      id: 1,
      images: Images.img_LiemBarber,
      title: 'Liêm Barbershop',
      description: 'Defining men style, great experience in a Chicano atmosphere',
    },
    {
      id: 2,
      images: Images.img_LiemBarber,
      title: '30Shine',
      description: '3 core values at 30Shine: Honesty, Ham to learn and Happy to serve',
    },
    {
      id: 3,
      images: Images.img_LiemBarber,
      title: 'Barbershop Vũ trí',
      description: 'Good Quality creates Strong Brand men style, great experience in a Chicano atmosphere',
    },
    {
      id: 4,
      images: Images.img_LiemBarber,
      title: 'Barbershop 4Rau',
      description: 'Giving customers a great experience in a classic style space',
    },
  ];

  const breakPoint_barbershop = [
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  const breakPoint_coupon = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
  ];

  return (
    <div>
      <div className="barbershop__slide">
        <h3 className="title">Outstanding barbershops</h3>
        <Carousel breakPoints={breakPoint_barbershop}>
          {barberItem.map((item) => (
            <div key={item.id} className="card__barbershop">
              <img src={item.images} alt="" className="img-card" />
              <div className="card__overlay">
                <h5>{item.title}</h5>
                <p>{item.sl}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="coupon__slide">
        <h3 className="title">Exclusive deals are available ony at us</h3>
        <Carousel breakPoints={breakPoint_coupon}>
          {couponItem.map((item) => (
            <div key={item.id} className="card__coupon">
              <img src={item.images} alt="" className="img-card" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="recommend__slide">
        <h3 className="title">Recommend from us</h3>
        <Carousel breakPoints={breakPoint_barbershop}>
          {barberItem.map((item) => (
            <div key={item.id} className="card__recommend">
              <img src={item.images} alt="" className="img-card" />
              <div className="card__description">
                <h5>{item.title}</h5>
               
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slide;
