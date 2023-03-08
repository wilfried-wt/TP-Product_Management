import React from 'react'
import Footer from '../components/Footer';
import GridProduct from '../components/GridProduct';
function Acceuil() {
  return (
    <div>
      <section className='bgimage'>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-lg-12 col-md-12 col-xs-12 hero-text'>
            <h2 className='slide-titre'>Hi it's the Board</h2>
            <p className='slide-desc'>See yours Good article Here!!</p>
          </div>
          </div>
        </div>

      </section>
      <h3 className='titre'> Nos différents  vêtements </h3>
      <div className='body'>
        <GridProduct/>
      </div>
    </div>
  )
}

export default Acceuil