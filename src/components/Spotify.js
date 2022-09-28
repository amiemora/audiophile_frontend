import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Spotify(data) {

        // const dropdownChanged = event => {
        //     data.changed(event.target.value);
    
        // }  

        // const printClickedItem = (event) => {
        //     setSelectedValue(event.target.value)
        // }
        // onClick={event => setSelectedValue(event.target.value)}
       
        const [selectedValue, setSelectedValue] = useState("")

    return (
       <div>
          <select value={selectedValue} onChange={event => setSelectedValue(event.target.value)}>
        {data.data.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
        </select>
        <h1>{selectedValue}</h1>
       </div>
    )
}



// {/* <select>
// {data.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
// </select> */}

// {/* <Dropdown >
// <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
// </Dropdown.Toggle>

// <Dropdown.Menu value={selectedValue} onChange={printClickedItem}>
//     {data.data.map((item, idx) => 
//     <Dropdown.Item key={idx} value={item.value}>{item.name}</Dropdown.Item>
//     )}
// </Dropdown.Menu>
// </Dropdown> */}