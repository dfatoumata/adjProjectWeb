import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProduit from './components/ListProduit';
import FormProduit from './components/FormProduit';
import Success from './components/Success';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
            <Route exact path='/menu' element={<Menu/>} />
                <Route exact path='/' element={<ListProduit/>} />
                <Route exact path='/create' element={<FormProduit/>} />
                <Route exact path='/sucess' element={<Success/>} />
                <Route exact path='/nav' element={<NavBar/>} />
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
