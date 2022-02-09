import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function Tan() {
     
    const [value, setValue] = useState("");
    const [Number1, setNumber1] = useState(0);


    function calculation() { 
        const originalvalue = Math.tan(Number1);
        const roundedvalue = originalvalue.toFixed(2);

        setValue(roundedvalue);
       
    }
    
    function getNumber1 (event) {
        setNumber1(event.target.value);
        
    }  



    return (
        <div className="output">
            <h3 className="mainHeading">Calculate Tan Value</h3>
            <h4 className="subheading">Enter the Angle in Radians below</h4>
           
           <input className="Inputstyle" name="Number1" onChange={getNumber1} type="number" />


           <button className="buttn" onClick = {calculation}> Show Results</button>

           <p className="outputtext">Tan Value is : {value}</p>
        </div>

    )
}
export default Tan;