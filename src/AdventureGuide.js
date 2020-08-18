import React from "react"
import DashboardLayout from './Layouts/DashboardLayout';
import './AdventureGuide.css'

function AdventureGuide() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1> Adventure Guide </h1>
        <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597779039/ezgif.com-video-to-gif_aihysi.gif" alt="WoW Map"/>
        </div>
        </>
    )
}

export default AdventureGuide 