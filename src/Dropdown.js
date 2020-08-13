import React from 'react'
import './App.css'

function Dropdown(props) {

    return (
        <div>
            <li>
                <a>{props.searchValue}</a>
            </li>
        </div>
    )
}

export default Dropdown