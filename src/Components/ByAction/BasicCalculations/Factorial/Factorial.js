import React, { useState } from "react"


// eslint-disable-next-line no-unused-vars
 function Factorial() {
     
    const [value, setValue] = useState("")
    const [Number1, setNumber1] = useState(0)


    function calculation(no) { 
        if (no >= 1) {         
            const Answer = no * calculation(no - 1)
            const roundedvalue = Answer.toFixed(2)
            setValue(roundedvalue)
            return roundedvalue
            
        } else {
            setValue(1)
            return 1  
        }

                 
    }
    
    function getNumber1 (event) {
        setNumber1(event.target.value)
        
    }  



    return (
        <div className="output">
            <h3 className="mainHeading">Calculate the Factorial Value</h3>
            <h4 className="subheading">Enter the Number below</h4>
           
           <input className="Inputstyle" name="Number1" onChange={getNumber1} type="number" />


           <button className="buttn" onClick = {() => calculation(Number1)}> Show Results</button>

           <p className="outputtext">The Factorial Value(!) is : {value}</p>
        </div>

    )
}
export default Factorial