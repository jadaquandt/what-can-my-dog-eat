import React from 'react'
import './App.css'

function Card(props) {

    return (
        <div className={`cardWrapper ${props.status}`}>
            <p className="card">{props.info}</p>
        </div>
    )
}

export default Card