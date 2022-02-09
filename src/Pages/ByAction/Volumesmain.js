import ConeVolume from "../../Components/ByAction/Volumes/ConeVolume/ConeVolume";
import CubeVolume from "../../Components/ByAction/Volumes/CubeVolume/CubeVolume";
import CylinderVolume from "../../Components/ByAction/Volumes/CylinderVolume/CylinderVolume";
import ParallelpipedVolume from "../../Components/ByAction/Volumes/ParallelepipedVolume/ParallelpipedVolume";
import PrismVolume from "../../Components/ByAction/Volumes/PrismVolume/PrismVolume";
import SphereVolume from "../../Components/ByAction/Volumes/SphereVolume/SphereVolume";
import TriangularPyramid from "../../Components/ByObject/Triangle/TriangularPyramid/TrianglePyramid";


function Volumesmain() {
    return (
        <div className="ContentBody">
            <ConeVolume />
            <CubeVolume />
            <CylinderVolume/>
            <ParallelpipedVolume />
            <PrismVolume />
            <SphereVolume />
            <TriangularPyramid />

        </div>
    )
}

export default Volumesmain;
