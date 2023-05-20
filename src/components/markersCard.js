import React from 'react';
import "./markersCard.css";


const MarkersCard = (props) => {
    var features = props.feature;
    let featurePills = [];
    var addy = props.address;
    var addyshort = addy.substring(0, addy.indexOf("("));
    for(var i = 0; i<features.length; i++){
        if (features[i] == "Play Area" || features[i] == "Play Area (ADA Compliant)"){
            featurePills.push(
                <p class="h5 pill-playarea">{features[i]}</p>
            )
        }
        else if (features[i] == "Restrooms" || features[i] == "Restrooms (ADA Compliant)"){
            featurePills.push(
                <p class="h5 pill-restroom">{features[i]}</p>
            )
        }
        else if (features[i] == "Paths" || features[i] == "Paths (ADA Compliant)"){
            featurePills.push(
                <p class="h5 pill-path">{features[i]}</p>
            )
        }
        featurePills.push(
            <p class="h5 card-pill">{features[i]}</p>
        )
    }
    console.log(features)

    return (
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">{props.title}</h1>
                <p class="h5">{addyshort}</p>
                <p class="h5">{props.hours}</p>
                {featurePills}
            </div>
        </div>
    )
}

export default MarkersCard;
