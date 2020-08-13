import React, { Component } from 'react'
import './App.css'
import Dropdown from "./Dropdown.js"


class SearchBar extends React.Component {

    static propTypes = {
       // suggestions: PropTypes.instanceOf(Array)
    }
    static defaultProperty = {
        suggestions: []
    }
    // Initialize values
    constructor(props) {
        super(props)
        this.state = {
            activeSuggestions: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        }
    }

    // Get suggestions from props, gets input from input field
    onChange = (e) => {
        const { suggestions } = this.props
        const userInput = e.currentTarget.value

        // Create array of food names
        const FoodArray = suggestions.map (
            (suggestion) => suggestion.name
        )

        // Filter suggestions based on input
        const filteredSuggestions = FoodArray.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        })
    }

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
                {suggestionsListComponent}
            </React.Fragment>
        )
    }
}

export default SearchBar
 