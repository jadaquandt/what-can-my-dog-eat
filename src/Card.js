import React from 'react'
import './App.css'

function Card(props) {

    return (
        <React.Fragment>
            <p className="card">{props.info}</p>
        </React.Fragment>
    )
}

export default Card