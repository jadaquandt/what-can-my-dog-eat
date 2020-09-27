import React, { Component } from 'react';

export class Accordion extends Component {
    constructor() {
        super();
        this.state = { 
            showVeg: false,
            showSweet: false,
            showSalt: false
        };
    }

    handleShowSalt = () => {
        this.setState({ showSalt: !this.state.showSalt})
    }

    handleShowVeg = () => {
        this.setState({ showVeg: !this.state.showVeg})
    }

    handleShowSweet = () => {
        this.setState({ showSweet: !this.state.showSweet})
    }
    
    render() {
        return (
        <div id="information">
                <h1 id="infoTitle">Additional Information</h1>
            <div className="info">
                <div onClick={this.handleShowVeg} class="infoHeaders">
                    <h2 >Limiting veggie consumption</h2>
                    {this.state.showVeg === true ? <img class="arrows" src="/images/down-arrow.png" alt=""/>
                    : <img class="arrows" src="/images/down-arrow-2.png" alt=""/>
                    }
                </div>
                <div className={this.state.showVeg === true ? 'infoInside expanded' : 'infoInside'}>
                    <p>
                    Dogs are omnivores, which means they can eat both meat and plants. 
                    Many commercial dog foods are made with vegetables and fruits along 
                    with meat and grains. These products are also made to include all 
                    the nutrients a dog needs to be healthy. 
                    <br/> <br/>
                    So even though your dog doesn’t need extra vegetables and fruits 
                    besides what's in her kibble, they won’t hurt her, either. Some 
                    produce can be part of good dog nutrition. Feed with caution though, 
                    always do your research before feeding your dog fruits and veggies.
                    </p>
                </div>
            </div>
            <div className="info">
                <div onClick={this.handleShowSalt} className="infoHeaders">
                    <h2 >Limiting salt consumption</h2>
                    {this.state.showSalt=== true ? <img className="arrows" src="/images/down-arrow.png" alt=""/>
                    : <img className="arrows" src="/images/down-arrow-2.png" alt=""/>
                    }
                    </div>
                    <div className={this.state.showSalt === true ? 'infoInside expanded' : 'infoInside'}>
                        <p>
                        While the occasional salty snack probably won't hurt your dog, 
                        always be aware of your pup's salt intake. When too much salt builds up 
                        in a dog’s body, her cells release their water content to try and balance 
                        out the sodium disparity. <br/> <br/> This, in turn, causes a litany of serious 
                        health effects. It can cause seizures, a loss of brain cells, injury to 
                        the kidneys, and severe dehydration. If a dog with salt poisoning 
                        isn’t treated medically, the condition can easily lead to death.
                        </p>
                    </div>
            </div>
            <div id="info">
                <div onClick={this.handleShowSweet} className="infoHeaders">
                    <h2 >Limiting sweet consumption</h2>
                    {this.state.showSweet === true ? <img className="arrows" src="/images/down-arrow.png" alt=""/>
                    : <img className="arrows" src="/images/down-arrow-2.png" alt=""/>
                    }
                </div>
                <div className={this.state.showSweet === true ? 'infoInside expanded' : 'infoInside'}>
                    <p>
                        Both chocolate and the artificial sweetener xylitol (found in many 
                        sugar-free candies) can be toxic to dogs. Never give these to your dog. 
                        Other than that, sugary foods that humans like to eat are generally not 
                        so good for your pup. 
                        <br/> <br/>
                        Excess sugar can cause an upset stomach, cavities, 
                        weight gain, metabolic changes, and even diabetes in dogs. We know it's 
                        hard to say no to those puppy eyes when they're staring down your ice cream, 
                        but it's for her good!
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Accordion
