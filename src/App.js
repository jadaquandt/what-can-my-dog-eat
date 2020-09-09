import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import './App.css';
import dogFoodsData from "./dogFoods.js";
import Accordion from './Accordion.jsx';
import Disclaimer from './Disclaimer.jsx';

export class App extends Component {
    render() {        
        return (
            <div className="container">
                <section className="searchWrapper">
                    <h1 className="title">What can my dog eat?</h1>
                    <SearchBar foodOptions={dogFoodsData}/>
                </section>
                <section className="accordionWrapper">
                    <Accordion />
                </section>
                    <Disclaimer />
            </div>
        )
    }
}

export default App;
