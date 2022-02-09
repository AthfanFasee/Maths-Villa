import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function CircleArea() {
    const PI = 3.14;
     //Values
    const [value, setValue] = useState("");
    const [inputvalue, setInputvalue] = useState(0);

    function calculation() { 
        const originalvalue = PI * inputvalue * inputvalue;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
    }
    
    function getInput (event) {
        setInputvalue(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Area of a Circle</h3>
            <h4 className="subheading">Enter the radius (r) of the Circle below in cm</h4>
           
           <input className="Inputstyle" onChange={getInput} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Area</button>

           <p className="outputtext">Area of the Circle(πr^2) is : {value}</p>
        </div>

    )
}
export default CircleArea;