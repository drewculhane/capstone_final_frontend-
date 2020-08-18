import React from "react"
import DashboardLayout from './Layouts/DashboardLayout';
import './AdventureGuide.css'

function AdventureGuide() {
    return (
        <>
        <DashboardLayout/> 
        <div id="g-s" className="Component-styles-container Getting-Started ">
        <h1 id="comment-thread-post" className="For-feed-header"> Adventure Guide: </h1>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3 adv-guide" >
        <div className="card-header">
        <img className="map-gif" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1597779039/ezgif.com-video-to-gif_aihysi.gif" alt="WoW Map"/>
        </div> 
        </div> 
        </div> 
        </>
    )
}

export default AdventureGuide 