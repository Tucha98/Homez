import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './comps/Header';
import HomePage from './comps/Home';

function App() {
 return (
 <BrowserRouter>
      <Header/>

      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      
  </BrowserRouter> 
  ); 
}

export default App;
