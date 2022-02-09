import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function PrismVolume() {
     
    const [value, setValue] = useState("");
    const [base, setbase] = useState(0);
    const [height, setheight] = useState(0);

    function calculation() { 
        const originalvalue = base*height;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
      
    }
    
    function getbase (event) {
        setbase(event.target.value);
        
    }  

    function getheight (event) {
        setheight(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a Prism</h3>
            <h4 className="subheading">Enter the base (b) of the Prism below in cm</h4>
           
           <input className="Inputstyle" name="base" onChange={getbase} type="number" />

           <h4 className="subheading">Enter the height (h) of the Prism below in cm</h4>
           <input className="Inputstyle" name="height" onChange={getheight} type="number" />

           <button className="buttn" onClick = {calculation}> Show Volume</button>

           <p className="outputtext">Volume of the Prism(b*h) is : {value}</p>
        </div>

    )
}
export default PrismVolume;