import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './page/Layout';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>  
  );
}

export default App;
