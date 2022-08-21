import './style1.css';
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Site/Nav';
import Header from './components/Site/Header';
import Catchall from './components/Site/Catchall';
import Home from './components/Site/Home';
import LoginOReg from './components/Users/LoginOReg';
import BucketItem from './components/BucketList/Item'
import MemForm from './components/BucketList/MemForm';

function App() {
  // header default -> can change if passed to component
  const [header, setHeader] = useState('Memory Box')
  return (
    <>
      <Header setHeader={setHeader} header={header}/>
      <Nav/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Catchall setHeader={setHeader}/>}/>
            <Route exact path='/' element={<Home setHeader={setHeader}/>}/> 
            <Route exact path='/login' element={<LoginOReg/>}/>
            <Route exact path='/bucket/:id' element={<BucketItem/>}/>
            <Route path='/memory-box' element={<MemForm/>}/>
            {/* memory */}
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
