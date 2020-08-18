import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './TalentTrees.css'

function TalentTrees() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Talent Trees </h1>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
        <a href="https://classic.wowhead.com/talent-calc/embed/druid/005323105-3210052020050150231"> Embedded. </a>
        </div>
        </div>
        </div> 
        </>
    )
}

export default TalentTrees 