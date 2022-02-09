import React, { useState } from "react";


// eslint-disable-next-line no-unused-vars
 function TriangularPyramid() {
     
    const [value, setValue] = useState("");
    const [baseArea, setbaseArea] = useState(0);
    const [height, setheight] = useState(0);

    function calculation() { 
        const originalvalue =(baseArea*height);
        const answer =originalvalue/3;

        const roundedvalue = answer.toFixed(2);

        setValue(`${roundedvalue} cm^2`);
      
    }
    
    function getbaseArea (event) {
        setbaseArea(event.target.value);
        
    }  

    function getheight (event) {
        setheight(event.target.value);
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a TriangularPyramid</h3>
            <h4 className="subheading">Enter the baseArea (a) of the TriangularPyramid below in cm</h4>
           
           <input className="Inputstyle" name="baseArea" onChange={getbaseArea} type="number" />

           <h4 className="subheading">Enter the height (h) of the TriangularPyramid below in cm</h4>
           <input className="Inputstyle" name="height" onChange={getheight} type="number" />

           <button className="buttn" onClick = {calculation}> Show Volume </button>

           <p className="outputtext">Volume of the TriangularPyramid(1/3 *a*h) is : {value}</p>
        </div>

    )
}

export default TriangularPyramid;