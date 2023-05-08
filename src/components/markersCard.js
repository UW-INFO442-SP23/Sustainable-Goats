import React from 'react';
import "./markersCard.css";


const MarkersCard = (props) => {
    var features = props.feature;
    let featurePills = [];
    for(var i = 0; i<features.length; i++){
        featurePills.push(
            <p class="h5 card-pill">{features[i]}</p>
        )
    }
    console.log(features)

    return (
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1>
                <p class="h5">{props.hours}</p>
                <p class="h5">{props.address}</p>
                {featurePills}
            </div>
        </div>
    )
}

export default MarkersCard;
