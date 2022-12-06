import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProduit from './components/ListProduit';
import FormProduit from './components/FormProduit';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
            <Route exact path='/menu' element={<Menu/>} />
                <Route exact path='/' element={<ListProduit/>} />
                <Route exact path='/create' element={<FormProduit/>} />
              
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
