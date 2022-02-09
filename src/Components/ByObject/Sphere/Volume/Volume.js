import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function SphereVolume() {
    const PI = 3.14;
     
    const [value, setValue] = useState("");
    const [inputvalue, setInputvalue] = useState(0);

    function calculation() { 
        const originalvalue = PI * inputvalue * inputvalue * inputvalue * (4/3);

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^3`);
    }
    
    function getInput (event) {
        setInputvalue(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a Sphere</h3>
            <h4 className="subheading">Enter the radius (r) of the Sphere below in cm</h4>
           
           <input className="Inputstyle" onChange={getInput} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Volume</button>

           <p className="outputtext">Volume of the Sphere(πr^3*(4/3)) is : {value}</p>
        </div>

    )
}
export default SphereVolume;