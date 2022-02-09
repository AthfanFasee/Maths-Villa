import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function Circumference() {
    const PI = 3.14;
     
    const [value, setValue] = useState("");
    const [inputvalue, setInputvalue] = useState(0);

    function calculation() { 
        const originalvalue = PI * inputvalue * 2;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm`);
    }
    
    function getInput (event) {
        setInputvalue(event.target.value);
        
    }   



    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Circumference of a Circle</h3>
            <h4 className="subheading">Enter the radius (r) of the circle below in cm</h4>
           
           <input className="Inputstyle" onChange={getInput} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Circumference</button>

           <p className="outputtext">Circumference of the Circle(2πr) is : {value}</p>
        </div>

    )
}
export default Circumference;