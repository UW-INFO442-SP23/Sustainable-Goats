import "./filters.css";
import React from "react";
import { useState } from "react";

function Filter() {
    const [selected, setSelected] = useState(null);
    const [checkedItems, setCheckedItems] = useState({});


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const handleChange = (event) => {
        setCheckedItems({
          ...checkedItems,
          [event.target.id]: event.target.checked,
        });
      };

  return (
    <div className="wrapper">
        <div className="accordion">
            {data.map((item, i) => (
                <div className = "item">
                    <div className="title" onClick={() => toggle(i)}>
                        <h2 className="filter-title">Filters</h2>
                        <span>{selected === i ? '▲': '▼'}</span>
                    </div>
                    <div className={selected === i ? 'content show': 'content'}>
                    {features.map((features) => (
                        <label key={features.id}>
                        <input
                            className="checkboxes"
                            id={features.id}
                            type="checkbox"
                            checked={checkedItems[features.id] || false}
                            onChange={handleChange}
                        />
                        {features.value}
                        </label>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div> 
  )
}

const data = [
    {
        question: 'Filters',
        answer:
        'Here is all the features listed and what not'
    },
]

const features = [
    { id: '74', value: 'Adult Fitness Equipment' },
    { id: ['3', '1'], value: 'Basketball' },
    { id: ['3', '2'], value: 'Basketball' },
    { id: '45', value: 'Baseball/Softball' },
    { id: ['6', '1'], value: 'Boat Launch' },
    { id: ['6', '2'], value: 'Boat Launch' },
  ];

export default Filter;