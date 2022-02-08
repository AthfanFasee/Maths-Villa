import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function RegularPolygonArea() {
     
    const [value, setValue] = useState("")
    const [permeter, setpermeter] = useState(0)
    const [apothem, setapothem] = useState(0)

    function calculation() { 
        const originalvalue = (permeter*0.5)*apothem

        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue} cm^2`)
        console.log(value)
    }
    
    function getpermeter (event) {
        setpermeter(event.target.value)
        
    }  

    function getapothem (event) {
        setapothem(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Area of a Regular Polygon</h3>
            <h4 className="subheading">Enter the permeter (p) of the Traingle below in cm</h4>
           
           <input className="Inputstyle" name="permeter" onChange={getpermeter} type="number" />

           <h4 className="subheading">Enter the apothem (a) of the Traingle below in cm</h4>
           <input className="Inputstyle" name="apothem" onChange={getapothem} type="number" />

           <button className="buttn" onClick = {calculation}> Show Area</button>

           <p className="outputtext">Area of the Regular Polygon(p/2 *a) is : {value}</p>
        </div>

    )
}
export default RegularPolygonArea