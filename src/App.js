import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from "react-router-dom";
import Header from './comps/Header';
import HomePage from './comps/Home';

function App() {
 return (
 //<BrowserRouter>
      <Header/>
    // <Route path="/" component={HomePage}/>
//  </BrowserRouter> 
  ); 
}

export default App;
