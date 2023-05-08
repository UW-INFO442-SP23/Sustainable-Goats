import React from 'react';

const MarkersCard = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1> <br />
                <p class="card-text">{props.content}</p>  <br />
            </div>
        </div>
    )
}

export default MarkersCard;
