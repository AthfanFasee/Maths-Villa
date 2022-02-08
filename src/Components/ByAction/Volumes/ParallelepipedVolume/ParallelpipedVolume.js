import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function ParallelpipedVolume() {
     
    const [value, setValue] = useState("")
    const [length, setLength] = useState(0)
    const [width, setwidth] = useState(0)
    const [height, setheight] = useState(0)

    function calculation() { 
        const originalvalue = length*height*width

        const roundedvalue = originalvalue.toFixed(2)

        setValue(`${roundedvalue} cm^3`)
        console.log(value)
    }
    
    function getlength (event) {
        setLength(event.target.value)
        
    }  

    function getheight (event) {
        setheight(event.target.value)
        
    }   

    function getwidth (event) {
        setwidth(event.target.value)
        
    }   


    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Volume of a Parallelpiped</h3>
            <h4 className="subheading">Enter the length (l) of the Parallelpiped below in cm</h4>
           
           <input className="Inputstyle"  onChange={getlength} type="number" />

           <h4 className="subheading">Enter the width (w) of the Parallelpiped below in cm</h4>
           <input className="Inputstyle"  onChange={getwidth} type="number" />
           
           <h4 className="subheading">Enter the height (h) of the Parallelpiped below in cm</h4>
           <input className="Inputstyle"  onChange={getheight} type="number" />

           <button className="buttn" onClick = {calculation}> Show Volume</button>

           <p className="outputtext">Volume of the Parallelpiped(l*w*h) is : {value}</p>
        </div>

    )
}
export default ParallelpipedVolume