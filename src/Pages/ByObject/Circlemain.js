import React from "react"
import ArcLength from "../../Components/ByObject/Circle/ArcLength/ArcLength"
import Area from "../../Components/ByObject/Circle/Area/Area"
import Circumference from "../../Components/ByObject/Circle/Circumference/Circumference"
import Diameter from "../../Components/ByObject/Circle/Diameter/Diameter"


export default function Circlemain () {
    
    return (
        <div>
            <Area />
            <Circumference />
            <Diameter />
            <ArcLength />
            
            
        </div>
    )
}