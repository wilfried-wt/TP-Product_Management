import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import GridProduct from './components/GridProduct';
function App() {
  return (
    <div>
      <Header/>
      <h3 className='titre'> Bienvenue dans votre boutique favorite</h3>
      <div className='body'>
        <GridProduct/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
