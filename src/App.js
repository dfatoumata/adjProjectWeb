import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Add from './components/forms/Add';
import Manual from './components/forms/Manual';
import Bulk from './components/forms/Bulk';
import Preview from './components/forms/Preview';
import Manulaprev from './components/forms/Manulaprev';
import Addform from './components/forms/Addform';

import './App.css';
import Consult from './components/forms/Consult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/consult' element={<Consult />}/>
          <Route path='/add' element={<Addform /> } />
          <Route path='added' element={<Add/>} />
          <Route path='/manual' element={<Manual/>}/>
          <Route path='/bulk' element={<Bulk/> }/>
          <Route path='/preview' element={<Preview/>}/>
          <Route path='/manualprev' element={<Manulaprev/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
