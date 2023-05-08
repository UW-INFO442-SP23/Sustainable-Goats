import React from 'react';
import "./markersCard.css";


const MarkersCard = (props) => {
    var features = props.feature;
    let featurePills = [];
    for(var i = 0; i<features.length; i++){
        featurePills.push(
            <p class="card-pill">{features[i]}</p>
        )
    }
    console.log(features)

    return (
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1> <br />
                <h1 class="card-text">{props.hours}</h1> <br />
                <p class="card-text">{props.address}</p>  <br />
                {featurePills}
            </div>
        </div>
    )
}

export default MarkersCard;
