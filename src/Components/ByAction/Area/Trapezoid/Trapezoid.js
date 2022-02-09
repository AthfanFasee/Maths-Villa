import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function TrapezoidArea() {
     
    const [value, setValue] = useState("");
    const [largeSide, setlargeSide] = useState(0);
    const [smallSide, setsmallSide] = useState(0);
    const [height, setHeight] = useState(0);

    function calculation() { 
        const originalvalue = (largeSide+smallSide)*0.5;
        const answer = originalvalue*height;

        const roundedvalue = answer.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
    }
    
    function getlargeSide (event) {
        setlargeSide(event.target.value);
        
    }  

    function getsmallSide (event) {
        setsmallSide(event.target.value);
        
    }  

    function getheight (event) {
        setHeight(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Area of a Trapezoid</h3>
            
            <h4 className="subheading">Enter the largeSide (S) of the Trapezoid below in cm</h4>
           <input className="Inputstyle" name="largeSide" onChange={getlargeSide} type="number" />

           <h4 className="subheading">Enter the smallSide (s) of the Trapezoid below in cm</h4>
           <input className="Inputstyle" name="smallSide" onChange={getsmallSide} type="number" />
            
           <h4 className="subheading">Enter the height (h) of the Trapezoid below in cm</h4>
           <input className="Inputstyle" name="smallSide" onChange={getheight} type="number" />

           <button className="buttn" onClick = {calculation}> Show Area</button>

           <p className="outputtext">Area of the Trapezoid(((S+s)*0.5)h) is : {value}</p>
        </div>

    )
}
export default TrapezoidArea;