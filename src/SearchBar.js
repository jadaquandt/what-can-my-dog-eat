import React, { Component } from 'react'
import './App.css'
import Dropdown from "./Dropdown.js"
import dogFoodsData from "./dogFoods.json"

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
            filteredSuggestions: dogFoodsData,
            showSuggestions: false,
            userInput: ''
        }
    }

    // React.Fragment behaves like a DIV, but doesn't show up in the final output
    render() {
        // Display the list
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
        } = this
        let suggestionsListComponent
        if(showSuggestions && userInput){
            if(filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            return (
                                <li key={suggestion} onClick={onClick}>
                                   {suggestion} 
                                </li>
                            )
                        })}
                    </ul>
                )
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
 