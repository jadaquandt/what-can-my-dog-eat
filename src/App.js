import React from 'react';
import SearchBar from './SearchBar.js';
import './App.css';
// import Accordion from './Accordion';

function App() {
  console.log(dogFoodsData)
  return (
    <div className="App">
      {/* <Accordion /> */}
      <h1>Can my dog eat...?</h1>
      <SearchBar/>
    </div>
  );
}

export default App;
