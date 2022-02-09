import React from 'react';
import Add from "../../Components/ByAction/BasicCalculations/Add/Add";
import Root from "../../Components/ByAction/BasicCalculations/Root/Root";
import Sub from "../../Components/ByAction/BasicCalculations/Sub/Sub";
import Squared from '../../Components/ByAction/BasicCalculations/Square/Square';
import Division from '../../Components/ByAction/BasicCalculations/Division/Division';
import Multiplication from '../../Components/ByAction/BasicCalculations/Multiplication/Multiplication';
import Factorial from '../../Components/ByAction/BasicCalculations/Factorial/Factorial';


 function BasicCalculationmain() {
    
    return (
        <div>
            <Add />
            <Sub />
            <Multiplication />
            <Division />
            <Root />
            <Squared />
            <Factorial />        
        </div>
    )
}

export default BasicCalculationmain;