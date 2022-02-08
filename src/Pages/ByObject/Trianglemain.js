import React from 'react'
import Area from "../../Components/ByObject/Triangle/Area/Area"
import Py from "../../Components/ByObject/Triangle/Py/Py"
import Angle from '../../Components/ByObject/Triangle/Angle/Angle'
import TriangularPyramid from '../../Components/ByObject/Triangle/TriangularPyramid/TrianglePyramid'




export default function Trianglemain() {

    return (
        <div>
            <Area />
            <Py />
            <Angle />
            <TriangularPyramid />
        </div>
    )
}
