import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function ArcLength() {
     
    const [value, setValue] = useState("");
    const [length, setlength] = useState(0);
    const [angel, setangel] = useState(0);

    function calculation() { 
        const originalvalue = length*angel;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
       
    }
    
    function getlength (event) {
        setlength(event.target.value);
        
    }  

    function getangel (event) {
        setangel(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the ArcLength of a Circle</h3>
            <h4 className="subheading">Enter the length (l) of the Circle below in cm</h4>
           
           <input className="Inputstyle" name="length" onChange={getlength} type="number" />

           <h4 className="subheading">Enter the angel (θ) of the Circle below in radians</h4>
           <input className="Inputstyle" name="angel" onChange={getangel} type="number" />

           <button className="buttn" onClick = {calculation}> Show ArcLength</button>

           <p className="outputtext">ArcLength of the Circle(θ*l) is : {value}</p>
        </div>

    )
}

export default ArcLength;