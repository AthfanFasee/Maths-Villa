import RegularPolygonArea from "../../Components/ByAction/Area/RegularPolygonArea/RegularPolygonArea";
import RhombusArea from "../../Components/ByAction/Area/Rhombus/Rhombus";
import SphereArea from "../../Components/ByAction/Area/SphereArea/SphereArea";
import TrapezoidArea from "../../Components/ByAction/Area/Trapezoid/Trapezoid";
import TriangleArea from "../../Components/ByAction/Area/TriangleArea/TriangleArea";

function AreaMain() {
    return (
        <div>
            <RegularPolygonArea />
            <RhombusArea />
            <SphereArea />
            <TrapezoidArea />
            <TriangleArea />
        </div>
    )
}

export default AreaMain;
