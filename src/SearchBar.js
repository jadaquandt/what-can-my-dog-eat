import React, { Component } from 'react'
import './App.css'
import Dropdown from "./Dropdown.js"
import dogFoodsData from "./dogFoods.js"

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
        const foodOptions = dogFoodsData
    }

    // Filter food options based on user input
    onChange = (e) => {
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
            userInput: e.currentTarget.value
        })
    }

    // Display the corresponding card information after selecting food
    onClick = e => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
    };

    render() {
        const {
            onChange, onClick, onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
        } = this

        // Display the list of suggestions
        let suggestionsListComponent
        if(showSuggestions && userInput){
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

        return (
            // React.Fragment behaves like a DIV, but doesn't show up in the final output
            <React.Fragment>
                <input 
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                { suggestionsListComponent }
            </React.Fragment>
        )
    }
}

export default SearchBar
 