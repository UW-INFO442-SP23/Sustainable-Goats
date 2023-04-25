import * as React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import {Helmet} from "react-helmet"
import "./Map.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Map = () => {
    return (
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id={"map"}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    )
};
export default Map;