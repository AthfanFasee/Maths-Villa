import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function Angle() {
     
    const [value, setValue] = useState("")
    const [Angle1, setAngle1] = useState(0)
    const [Angle2, setAngle2] = useState(0)

    function calculation() { 
        const angle = Number(Angle1)+Number(Angle2)
    
        const originalvalue = 180 - angle
        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue}°`)
        console.log(value)
    }
    
    function getAngle1 (event) {
        setAngle1(event.target.value)
        
    }  

    function getAngle2 (event) {
        setAngle2(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">FindOut the 3rd Angle of a Triangle</h3>
            <h4 className="subheading">Enter Angle1 (a) of the Traingle below in Degree(°)</h4>
           
           <input className="Inputstyle" name="Angle1" onChange={getAngle1} type="number" />

           <h4 className="subheading">Enter the Angle2 (b) of the Traingle below in Degree(°)</h4>
           <input className="Inputstyle" name="Angle2" onChange={getAngle2} type="number" />

           <button className="buttn" onClick = {calculation}> Show 3rd Angle</button>

           <p className="outputtext"> {value==="180°" ? "Pls Enter Angles to find out 3rd Angle" : `3rd Angle of the Triangle(360° - a+b) is : ${value}`}</p>
        </div>

    )
}

export default Angle