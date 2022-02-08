import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function CurvedeSurface() {
     
    const [value, setValue] = useState("")
    const [radius, setradius] = useState(0)
    const [height, setheight] = useState(0)

    function calculation() { 
        const PI = 3.14
        
        const originalvalue = 2*PI*radius*height

        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue} cm^2`)
        console.log(value)
    }
    
    function getradius (event) {
        setradius(event.target.value)
        
    }  

    function getheight (event) {
        setheight(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Curved Surface of a Cylinder</h3>
            <h4 className="subheading">Enter the radius (r) of the Cylinder below in cm</h4>
           
           <input className="Inputstyle" name="radius" onChange={getradius} type="number" />

           <h4 className="subheading">Enter the height (h) of the Cylinder below in cm</h4>
           <input className="Inputstyle" name="height" onChange={getheight} type="number" />

           <button className="buttn" onClick = {calculation}> Show CurvedeSurface</button>

           <p className="outputtext">Curved Surface of the Cylinder(2*π*r*h) is : {value}</p>
        </div>

    )
}

export default CurvedeSurface