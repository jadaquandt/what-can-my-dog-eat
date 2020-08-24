import React from 'react'
import './App.css'

function Dropdown(props) {

    return (
        <React.Fragment>
            <li onClick={props.onClick}>{props.food}</li>
        </React.Fragment>
        
    )
}

export default Dropdown