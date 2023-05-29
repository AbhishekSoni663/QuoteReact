import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import { QuoteProvider } from './Context/QuoteContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QrGen from './Components/QrGen';
import Darkmode from './Components/Navbar';
import Home from './Home';
const App = ()=>{
    return (
        <Router>
        <QuoteProvider>
        <Darkmode/>
       <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/quote' element={
       <div className='container'>
        <Card/>
        </div>} 
        />
        <Route path="/qrcode" element={<QrGen/>}/>
       </Routes>
        </QuoteProvider>
        </Router>
    )
}
export default App