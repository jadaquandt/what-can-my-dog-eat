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
                    <div className="row">
                        <h1 className="title">What can my dog eat?</h1>
                        <SearchBar foodOptions={dogFoodsData}/>
                    </div>
                </section>
                <section className="accordionWrapper">
                    <div className="row">
                        <Accordion />
                    </div>
                </section>
                <Disclaimer />
            </div>
        )
    }
}

export default App;
