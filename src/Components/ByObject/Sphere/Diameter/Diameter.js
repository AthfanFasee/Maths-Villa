import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function Diameter() {
     
    const [value, setValue] = useState("");
    const [inputvalue, setInputvalue] = useState(0);

    function calculation() { 
        const originalvalue = inputvalue * 2;

        const roundedvalue = originalvalue.toFixed(2);


        setValue(`${roundedvalue} cm`);
    }
    
    function getInput (event) {
        setInputvalue(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Diameter of a Sphere</h3>
            <h4 className="subheading">Enter the radius (r) of the Sphere below in cm</h4>
           
           <input className="Inputstyle" onChange={getInput} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Diameter</button>

           <p className="outputtext">Diameter of the Sphere(2r) is : {value}</p>
        </div>

    )
}

export default Diameter;