import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './TalentTrees.css'

function TalentTrees() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Talent Trees </h1>
        <a href="https://classic.wowhead.com/talent-calc/embed/rogue/005323105-3210052020050150231"> Embedded. </a>
        </div>
        </>
    )
}

export default TalentTrees 