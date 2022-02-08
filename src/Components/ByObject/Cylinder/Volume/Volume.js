import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function CylinderVolume() {
    const PI = 3.14
     
    const [value, setValue] = useState("")
    const [radius, setradius] = useState(0)
    const [height, setheight] = useState(0)

    function calculation() { 
        const originalvalue = PI * radius * radius * height

        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue} cm^3`)
    }
    
    function getRadius (event) {
        setradius(event.target.value)
        
    }   
    function getHeight (event) {
        setheight(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a Cylinder</h3>
            
            <h4 className="subheading">Enter the radius (r) of the Cylinder below in cm</h4>
           <input className="Inputstyle" onChange={getRadius} type="number"  name="input"/>
            
            <h4 className="subheading">Enter the height (h) of the Cylinder below in cm</h4>
           <input className="Inputstyle" onChange={getHeight} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Volume</button>

           <p className="outputtext">Volume of the Cylinder(πr^2*h) is : {value}</p>
        </div>

    )
}
export default CylinderVolume