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
            <div >
                <button onClick={this.toggle}>Close/Open</button>
                <div className={"collapse" + (this.state.open ? ' in' : '')}>
                    This is the div!
                    {dogFoods.map( (data) => {
                    return (
                    <div>
                        {data.name}
                    </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Accordion
