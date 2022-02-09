import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function RhombusArea() {
     
    const [value, setValue] = useState("");
    const [largeDiagonal, setlargeDiagonal] = useState(0);
    const [smallDiagonal, setsmallDiagonal] = useState(0);

    function calculation() { 
        const originalvalue = largeDiagonal*smallDiagonal*0.5;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
        
    }
    
    function getlargeDiagonal (event) {
        setlargeDiagonal(event.target.value);
        
    }  

    function getsmallDiagonal (event) {
        setsmallDiagonal(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Area of a Rhombus</h3>
            <h4 className="subheading">Enter the largeDiagonal (D) of the Rhombus below in cm</h4>
           
           <input className="Inputstyle" name="largeDiagonal" onChange={getlargeDiagonal} type="number" />

           <h4 className="subheading">Enter the smallDiagonal (d) of the Rhombus below in cm</h4>
           <input className="Inputstyle" name="smallDiagonal" onChange={getsmallDiagonal} type="number" />

           <button className="buttn" onClick = {calculation}> Show Area</button>

           <p className="outputtext">Area of the Rhombus((D*d)/(1/2)) is : {value}</p>
        </div>

    )
}
export default RhombusArea;