import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function CubeVolume() {
     
    const [value, setValue] = useState("");
    const [side, setside] = useState(0);


    function calculation() { 
        const originalvalue = side * 3;

        const roundedvalue = originalvalue.toFixed(2);

        setValue(`${roundedvalue} cm^3`);
        
    }
    

    function getside (event) {
        setside(event.target.value);
        
    }  



    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a Cube</h3>
            <h4 className="subheading">Enter the side(s) of the Cube below in cm</h4>
           
           <input className="Inputstyle" name="side" onChange={getside} type="number" />


           <button className="buttn" onClick = {calculation}> Show Volume</button>

           <p className="outputtext">The Volume of the Cube(s^3) is : {value}</p>
        </div>

    )
}
export default CubeVolume;