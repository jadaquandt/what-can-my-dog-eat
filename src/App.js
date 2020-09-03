import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import './App.css';
import dogFoodsData from "./dogFoods.js"
<<<<<<< HEAD
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
=======
import Accordion from './Accordion.jsx';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <section className="main">
                    <h1 className="title">What can my dog eat?</h1>
                    <SearchBar foodOptions={dogFoodsData}/>
                </section>
                <section className="section-1">
                    <Accordion />
                </section>
                <footer>
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>
                        Please note, the sole purpose of this website’s content is to inform, 
                        not to provide any kind of medical advice. Always consult with your vet 
                        regarding your dog’s diet, especially if she has medical problems. 
                        By using this website and reading this website’s content, you understand 
                        and accept our disclaimer.
                    </p>
                </footer>
            </div>
        )
    }
>>>>>>> master
}

export default App;
