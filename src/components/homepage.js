 import React from "react";
 import { useState } from "react";
 import { VscChevronDown } from "react-icons/vsc";
 import { VscChevronUp } from "react-icons/vsc";
import Map from './map/Map'
import './homepage.css'
import {cleanData} from './cleaned'
function HomePage() {
    const [selected, setSelected] = useState(false);
    const [checkedItems, setCheckedItems] = useState(false);
    const [data, setData] = useState(cleanData);
    // Toggles filter bar
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(false)
        }
        setSelected(i)
    }

     // Toggles checkbox item
    const handleChange = (event) => {
        setCheckedItems({
          /*...checkedItems, */
          [event.target.id]: event.target.checked,
        });
        if(event.target.checked === false) {
          setData(cleanData);
        } else {
          let id = event.target.id;
        if(id === '11') {
          let newData= cleanData.filter(row => row.ADACompliant === 'TRUE');
          console.log("this is correct");
          console.log(newData);
          setData(newData);
        } else {
          let refArray = [];
        for(let i = 0; i < features.length; i++) {
          if(features[i].id === id) {
            refArray = features[i].featureRef;
          }
        }
          
        console.log("this is ref: " + refArray);
        let newData = cleanData.filter(row => refArray.includes(row.Feature_ID));
        console.log("this is newData: " + newData);
        setData(newData);
        }
        
        }
        
      };

      return (
        <div className="home-container">
        <div className="text-filter">
          <h1>About the Map</h1>
          <text>This map was created using a dataset from Seattle Open Data called 
            <a href="https://data.seattle.gov/Parks-and-Recreation/Seattle-Parks-and-Recreation-Parks-Features/2cer-njie"> “Seattle Parks and Recreation Parks Features”. </a> 
            This dataset was selected because it contains details about parks in Seattle, including hours,
            features such as play areas, boat launches, and views, and it also has the coordinates of the park, which is essential for putting a marker on our map.</text>
          <h2>Filters:</h2> 
        <div className="wrapper">
          <div className="accordion"> 
            {filterType.map((item, i) => (
              <div className="item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h2 className="filter-title">{item.title}</h2>
                  <span>{selected === i ? <VscChevronUp />: <VscChevronDown />}</span>
                </div>
                <div className={selected === i ? 'content': 'content show'}>
                  <div className="feature-grid">
                    {features.map((feature) => (
                      <label key={feature.id} className="feature-label">
                        <input
                          className="checkboxes"
                          id={feature.id}
                          type="radio"
                          checked={checkedItems[feature.id] || false}
                          onChange={handleChange}
                        />
                        {feature.value}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <Map data={data}/>
        </div>
      )
}

const filterType = [
    {title: 'Features'},
]

const features = [
    { id: '1', value: 'Adult Fitness Equipment', featureRef: ["74"] },
    { id: '2', value: 'Basketball', featureRef: ["3","4"]},
    { id: '3', value: 'Baseball/Softball', featureRef: ["45"] },
    { id: '4', value: 'Boat Launch', featureRef: ["6","7"] },
    { id: '5', value: 'Fishing', featureRef: ["15"] },
    { id: '6', value: 'Play Area', featureRef: ["22"] },
    { id: '7', value: 'Picnic Sites', featureRef: ["21"] },
    { id: '8', value: 'Tennis Court', featureRef: ["29","30","31"] },
    { id: '9', value: 'Restrooms', featureRef: ["27"] },
    { id: '10', value: 'Waterfront', featureRef: ["36"]},
    { id: '11', value: 'ADA Compliant', featureRef: ["ADA"]}
  ];

export default HomePage;