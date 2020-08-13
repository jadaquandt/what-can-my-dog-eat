import React, { Component } from 'react';
import './Accordion.css';
import { dogFoods } from './dogFoods';

export class Accordion extends Component {
    constructor() {
        super();

        this.state = { 
            open: true 
        };
    }
    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }
    
    render() {
        return (
            <div id="answer">
                <div>{dogFoods[0].name}? {dogFoods[0].answer}</div>
                <button onClick={this.toggle}>Close/Open</button>
                <div className={"collapse" + (this.state.open ? ' in' : '')}>
                <div>{dogFoods[0].reason}</div>
                    {/* {dogFoods.map( (data, index) => {
                    return (
                    <div>
                        {data.name}
                    </div>
                    )
                })} */}
                </div>
            </div>
        )
    }
}

export default Accordion
