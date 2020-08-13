import React from 'react'
import './App.css'

function Dropdown(props) {

    return (
        <ul class="foodOptions">
            <li onClick={props.onClick}>{props.food}</li>
        </ul>
    )
}

export default Dropdown