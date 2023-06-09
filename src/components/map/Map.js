import * as React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import {Helmet} from "react-helmet"
import "./Map.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {data} from '../converted'
// import {cleanData} from '../cleaned'
import MarkersCard from '../markersCard'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
const Map = (props) => {

  
   /* const newData = data.filter(row => (row.xPos !== '' && row.yPos !== ''))
    console.log(data.length); 
    console.log(cleanData.length);*/

    

    const cleanData = props.data;
   /*
    const testData = cleanData.map(row => {
        if(row.Feature_Desc.includes('ADA Compliant')) {
            const newRow = {
                ...row,
                ADACompliant: 'TRUE'
            }
            return newRow;
            
        } else{
            
            return row;
        }
        
    })

    console.log(testData);
    */
    let markers = [];
    var parksAdded = [];
    var length = cleanData.length;

    for(var i = 0; i < length; i++){
        var key = i;
        // Checking to see if this park already has a marker
        if(!parksAdded.includes(cleanData[key.PMAID])){
            var park = cleanData[key]
            //add park to list of parks that has already been added
            parksAdded.push(park["PMAID"])

            //collect all of the features of this park
            var features = []
            for(var n = 0; n < length; n++){
                var key2 = n;
                if(cleanData[key2]["PMAID"] == park["PMAID"]){
                    if(!features.includes(cleanData[key2]["Feature_Desc"])) {
                        features.push(cleanData[key2]["Feature_Desc"])
                    }
                    
                }
            }

            //console.log(features)

            //create the marker & its corresponding pop up
            markers.push(
            <Marker position={[park["yPos"], park["xPos"]]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>   
                    <MarkersCard title = {park.Name} hours={park.hours} address={park["Location 1"]} feature={features}/>
                </Popup>
            </Marker>
            )
        }
    }
    return (
            
            <MapContainer center={[47.60, -122.33]} zoom={13} scrollWheelZoom={false} id={"map"} data-testId={"map"} maxZoom={18} minZoom={11}>
             {/*<TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}   
              {/* <ReactLeafletGoogleLayer type={'hybrid'} /> */}  
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {markers}
                
            </MapContainer>
            
            
    )
};
export default Map;