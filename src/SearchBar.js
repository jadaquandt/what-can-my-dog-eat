import React, { Component } from 'react'
import './App.css'
import Dropdown from "./Dropdown.js"
import Card from "./Card.js"

class SearchBar extends React.Component {

    // Initialize values
    constructor(props) {
        super(props)
        this.state = {
            activeSuggestions: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: '',
            cardText: ''
        }
    }

    // Filter food options based on user input
    onChange = (e) => {
        const { foodOptions } = this.props;
        const userInput = e.currentTarget.value

        // Create array of food names
        const FoodNameArray = foodOptions.map (
            (suggestion) => suggestion.name
        )

        // Filter suggestions based on input
        const filteredSuggestions = FoodNameArray.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            cardText: ''
        })
    }

    // Display the corresponding card information after selecting food
    onClick = e => {
        // Create array of food names and gather the input
        const { foodOptions } = this.props
        const userInput = e.currentTarget.innerText.toLowerCase()

        // Filter to selected food input
        const text = foodOptions.filter(t => t.name.toLowerCase().includes(userInput))
        
        // Set the selected food text
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText,
          cardText: text[0].reason
        });
    };

    render() {
        const {
            onChange, onClick, onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput,
              cardText
            }
        } = this

        // Display the list of suggestions or additional information from selected food item
        let suggestionsListComponent
        let moreInformation
        
        if(showSuggestions && userInput){
            //console.log(filteredSuggestions)
            if(filteredSuggestions.length) {
                suggestionsListComponent = filteredSuggestions.map(
                    (suggestion, index) => <Dropdown key={suggestion} food={suggestion} onClick={onClick}></Dropdown>)
            }
            else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestions!</em>
                    </div>
                )
            }
        }
        else {
            moreInformation = cardText
        }

        return (
            // React.Fragment behaves like a DIV, but doesn't show up in the final output
            <div>
                <input 
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                <ul class="foodOptions">
                    { suggestionsListComponent }
                </ul>
                <Card info={moreInformation}></Card>
            </div>
        )
    }
}

export default SearchBar
 