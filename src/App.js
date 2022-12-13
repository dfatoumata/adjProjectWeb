
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListAjust from './components/ListAjust';
import Form from './components/Form';
import Success from './components/ListBox';
import Chargement from './components/Chargement';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
            <Route exact path='/error' element={<Error/>} />
            <Route exact path='/Chargement' element={<Chargement/>} />
                <Route exact path='/' element={<ListAjust/>} />
                <Route exact path='/create' element={<Form/>} />
                <Route exact path='/sucess' element={<Success/>} />
                <Route exact path='/nav' element={<NavBar/>} />
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
