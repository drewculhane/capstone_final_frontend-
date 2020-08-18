import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './TalentTrees.css'

function TalentTrees() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Talent Trees </h1>
        <div className="talent-cont">
        <a href="https://classic.wowhead.com/talent-calc/embed/druid"> Embedded. </a>
        </div>
        </div>
        </>
    )
}

export default TalentTrees 