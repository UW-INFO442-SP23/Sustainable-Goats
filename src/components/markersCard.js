import React from 'react';
import "./markersCard.css";

const MarkersCard = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">{props.title}</h2> 
                <p class="card-text">{props.content}</p>  
            </div>
        </div>
    )
}

export default MarkersCard;
