import React from 'react';
import SearchBar from './SearchBar.js';
import './App.css';
import dogFoodsData from "./dogFoods.js"
import Accordion from './Accordion';
import Disclaimer from './Disclaimer';

function App() {
  console.log(dogFoodsData)
  return (
    <div className="App">
      <h1>Can my dog eat...?</h1>
      <SearchBar foodOptions={dogFoodsData}/>
      <Accordion />
      <Disclaimer/>
    </div>
  );
}

export default App;
