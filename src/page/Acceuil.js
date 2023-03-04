import React from 'react'
import Footer from '../components/Footer';
import GridProduct from '../components/GridProduct';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import font from '../asset/images/font0.png'
function Acceuil() {
  return (
    <div>
      <Carousel>
        <Carousel.Item slide={false}>
          <img
            className="image"
            src={font}
          />
          <Carousel.Caption>
            <h3 className='slide-titre'>Bienvenue dans votre Boutique </h3>
            <p className='slide'>votre marché plus proche de vous</p>
            <Button variant="primary">Sign up</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h3 className='titre'> Nos différents  vêtements </h3>
      <div className='body'>
        <GridProduct/>
      </div>
      <Footer/>
    </div>
  )
}

export default Acceuil