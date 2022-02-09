import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function Add() {
     
    
    const [value, setValue] = useState("");
    const [Number1, setNumber1] = useState(0);
    const [Number2, setNumber2] = useState(0);

    function calculation() { 
        const num1 = Number(Number1);
        const num2 = Number(Number2);

        const originalvalue = num1+num2;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(roundedvalue);
    }
    
    function getNumber1 (event) {
        setNumber1(event.target.value);
        
    }  

    function getNumber2 (event) {
        setNumber2(event.target.value);
        
    }   

    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Sum</h3>
            <h4 className="subheading">Enter Number1 below </h4>
           
           <input className="Inputstyle" name="Number1" onChange={getNumber1} type="number" />

           <h4 className="subheading">Enter Number 2</h4>
           <input className="Inputstyle" name="Number2" onChange={getNumber2} type="number" />

           <button className="buttn" onClick = {calculation}> Show Results</button>

           <p className="outputtext">The Sum is : {value}</p>
        </div>

    )
}

export default Add;