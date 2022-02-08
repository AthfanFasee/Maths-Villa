import CurvedeSurface from "../../Components/ByObject/Cylinder/Curved_Surface/Curved_Surface"
import TotalSurface from "../../Components/ByObject/Cylinder/Total_Surface/Total_Surface"
import CylinderVolume from "../../Components/ByObject/Cylinder/Volume/Volume"

function Cylindermain() {
    return (
        <div>
            <CurvedeSurface/>
            <TotalSurface/>
            <CylinderVolume/>
        </div>
    )
}

export default Cylindermain
