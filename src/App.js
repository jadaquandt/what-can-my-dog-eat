import React from 'react';
import SearchBar from './SearchBar.js';
import dogFoodsData from "./dogFoods.js"
import './App.css';
// import Accordion from './Accordion';

function App() {
  console.log(dogFoodsData)
  return (
    <div className="App">
      {/* <Accordion /> */}
      <h1>Can my dog eat...?</h1>
      <SearchBar
        suggestions={dogFoodsData}
      />
    </div>
  );
}

export default App;
