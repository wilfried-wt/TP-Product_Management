import React from 'react'
import Footer from '../components/Footer';
import GridProduct from '../components/GridProduct';
function Acceuil() {
  return (
    <div>
      <h3 className='titre'> Bienvenue dans votre boutique favorite</h3>
      <div className='body'>
        <GridProduct/>
      </div>
      <Footer/>
    </div>
  )
}

export default Acceuil