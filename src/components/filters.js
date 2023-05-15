// import "./filters.css";
// import React from "react";
// import { useState } from "react";
// // import { VscChevronDown } from "react-icons/vsc";
// // import { VscChevronUp } from "react-icons/vsc";

// function Filter() {
//     const [selected, setSelected] = useState(false);
//     const [checkedItems, setCheckedItems] = useState(false);

//     // Toggles filter bar
//     const toggle = (i) => {
//         if (selected === i) {
//             return setSelected(false)
//         }
//         setSelected(i)
//     }

//      // Toggles checkbox item
//     const handleChange = (event) => {
//         setCheckedItems({
//           ...checkedItems,
//           [event.target.id]: event.target.checked,
//         });
//       };

//       return (
//         <div className="wrapper">
//           <div className="accordion"> 
//             {filterType.map((item, i) => (
//               <div className="item" key={i}>
//                 <div className="title" onClick={() => toggle(i)}>
//                   <h2 className="filter-title">{item.title}</h2>
//                   <span>{selected === i ? <VscChevronUp />: <VscChevronDown />}</span>
//                 </div>
//                 <div className={selected === i ? 'content show': 'content'}>
//                   <div className="feature-grid">
//                     {features.map((feature) => (
//                       <label key={feature.id} className="feature-label">
//                         <input
//                           className="checkboxes"
//                           id={feature.id}
//                           type="checkbox"
//                           checked={checkedItems[feature.id] || false}
//                           onChange={handleChange}
//                         />
//                         {feature.value}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )
// }

// const filterType = [
//     {title: 'Features'},
// ]

// const features = [
//     { id: '1', value: 'Adult Fitness Equipment', featureRef: '74' },
//     { id: '2', value: 'Basketball', featureRef: '3-4'},
//     { id: '3', value: 'Baseball/Softball', featureRef: '45' },
//     { id: '4', value: 'Boat Launch', featureRef: '6-7' },
//     { id: '5', value: 'Fishing', featureRef: '15' },
//     { id: '6', value: 'Play Area', featureRef: '22' },
//     { id: '7', value: 'Picnic Sites', featureRef: '21' },
//     { id: '8', value: 'Tennis Court', featureRef: '29-30-31' },
//     { id: '9', value: 'Restrooms', featureRef: '27' },
//     { id: '10', value: 'Waterfront', featureRef: '36' },
//   ];

// export default Filter;