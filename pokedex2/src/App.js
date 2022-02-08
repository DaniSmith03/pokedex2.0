import './App.css';
import React from 'react';
import {Routes, Route, Switch} from "react-router-dom";
import Pokedex from './components/Pokedex';





function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Pokedex />}/>
        </Routes>
  );
}

export default App;
