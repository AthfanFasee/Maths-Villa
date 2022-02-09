import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function Py() {
     
    const [value, setValue] = useState("");
    const [side1, setside1] = useState(0);
    const [side2, setside2] = useState(0);

    function calculation() { 
        const Squared3rd = side1*side1 + side2*side2;
        const originalvalue = Math.sqrt(Squared3rd);

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm`);
      
    }
    
    function getside1 (event) {
        setside1(event.target.value);
        
    }  

    function getside2 (event) {
        setside2(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Find the 3rd side of a Right Triangle(Pythagorean Theorem)</h3>
            <h4 className="subheading">Enter the side1 (x) of the Traingle below in cm</h4>
           
           <input className="Inputstyle" name="side1" onChange={getside1} type="number" />

           <h4 className="subheading">Enter the side2 (y) of the Traingle below in cm</h4>
           <input className="Inputstyle" name="side2" onChange={getside2} type="number" />

           <button className="buttn" onClick = {calculation}> Show Results</button>

           <p className="outputtext">The length of 3rd side of the Traingle (Squared Root of (x^2 + y^2) is : {value}</p>
        </div>

    )
}
export default Py;