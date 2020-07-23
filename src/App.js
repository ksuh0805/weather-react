import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterApp from './RounterApp'
import Header from "./components/Header"
import './App.css';

function App() {
  const cityName = "Seoul";

  return (
   <BrowserRouter>
    <RouterApp />
   </BrowserRouter>
  );
}

export default App;
