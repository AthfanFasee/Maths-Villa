import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function SphereArea() {
    const PI = 3.14
     
    const [value, setValue] = useState("")
    const [inputvalue, setInputvalue] = useState(0)

    function calculation() { 
        const originalvalue = PI * inputvalue * inputvalue*4

        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue} cm^2`)
    }
    
    function getInput (event) {
        setInputvalue(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Area of a Sphere</h3>
            <h4 className="subheading">Enter the radius (r) of the Sphere below in cm</h4>
           
           <input className="Inputstyle" onChange={getInput} type="number"  name="input"/>

           <button className="buttn" onClick = {calculation}> Show Area</button>

           <p className="outputtext">Area of the Sphere(4πr^2) is : {value}</p>
        </div>

    )
}
export default SphereArea