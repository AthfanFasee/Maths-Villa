import React from "react";
import "./style.css";
import Trianglemain from "./Pages/ByObject/Trianglemain";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import BasicCalculationmain from "./Pages/ByAction/BasicCalculationmain";
import Trignometrymain from "./Pages/ByAction/Trignometrymain";
import Areamain from "./Pages/ByAction/Areamain";
import Navbar from "./Components/Navbar/Navbar";
import Circlemain from "./Pages/ByObject/Circlemain";
import Cylindermain from "./Pages/ByObject/Cylindermain";
import Spheremain from "./Pages/ByObject/Spheremain";
import Volumesmain from "./Pages/ByAction/Volumesmain";



// eslint-disable-next-line import/no-anonymous-default-export
export default function App () {
  return (
    //path engurethu browser le /path eh than kurikkum
    <Router>
        <Navbar />
        <Routes className="BodyContainer"> 
        <Route path="/" element={<Circlemain />} />
        <Route path="/Triangle" element={<Trianglemain />} />
        <Route path="/Cylinder" element={<Cylindermain />} />
        <Route path="/Sphere" element={<Spheremain />} />


        <Route path="*" element={<ErrorPage />}/>


        <Route path="/Area" element={<Areamain />} />
        <Route path="/Trignometry" element={<Trignometrymain />} />
        <Route path="/Basics" element={<BasicCalculationmain />} />
        <Route path="/Volumes" element={<Volumesmain />}/>
        </Routes>
    
    </Router> 
  )
}