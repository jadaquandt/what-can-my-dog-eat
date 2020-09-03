import React, { Component } from 'react';

export class Accordion extends Component {
    constructor() {
        super();

        this.state = { hide: false };
    }

    handleShow = () => {
        this.setState({ hide: false})
    }

    handleHide = () => {
        this.setState({ hide: true})
    }
    
    render() {
        return (
        <div id="information">
                <h1>General Info</h1>
            <div id="veggies">
                { this.state.hide === true
                    ? 
                    <div>
                    <h2 onClick={this.handleShow}>Dogs and Veggies </h2>
                    <p>Dogs are omnivores, which means they can eat both meat and plants. Many commercial dog foods are made with vegetables and fruits along with meat and grains. These products are also made to include all the nutrients a dog needs to be healthy.</p>
                    <p>So even though your dog doesn’t need extra vegetables and fruits besides what's in her kibble, they won’t hurt her, either. Some produce can be part of good dog nutrition. Feed with caution though, always do your research before feeding your dog fruits and veggies</p>
                    </div>
                    : <h2 onClick={this.handleHide}>Dogs and Veggies </h2>
                }
            </div>
            <div id="sweets">
                    { this.state.hide === true
                    ? 
                    <div>
                    <h2 onClick={this.handleShow}>Dogs and Sweets</h2>
                    <div>
                        <p>The big "no-no's" for dogs when giving them a sweet treat: Both chocolate and the artificial sweetener xylitol (found in many sugar-free candies) can be toxic to dogs. Never give these to your dog.</p>
                        <p>Other than that, sugary foods that human's like to eat are generally not so good for your pup. Excess sugar can cause an upset stomach, cavities, weight gain, metabolic changes, and even diabetes in dogs. We know it's hard to say no to those puppy eyes when they're staring down your ice cream, but it's for their good!</p>
                    </div>
                    </div>
                    : <h2 onClick={this.handleHide}>Dogs and Sweets </h2>
                }
            </div>
            </div>
        )
    }
}

export default Accordion
