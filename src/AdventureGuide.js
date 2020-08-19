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
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> We Recommend you do the following: </h2>
            <ul>
                <li> Finish every quest in Teldrassil. If you have skinning/herbalism, get em up as high as you can!</li>
                <li> Use Questie and milk Darkshore for every quest it's got. The collect-and-hand-in dead sea creature quests are great for exp points.</li>
                <li> Once you are high enough, take the boat from Darkshore to Menethil. Run to Ironforge, and take the deeprun tram to Stormwind.</li>
                <li> Get all your flying points on the way! Green Exclamation points.... woo...</li>
            </ul>
        </div>     
        </div>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> NEXT: </h2> 
        </div> 
        <div className="card-header"> 
            <ul> 
            <li> Now you are in the Eastern Kingdoms! </li> 
            <li> Spend your time between Westfall, the Redridge Mountains, and spooky, spooky Duskwood! </li>
                <li> Hey, if you've gotten this far, you probably don't need our help.....</li>
                <li> ...Buuuut just in case you do, check out our external resources! </li>
            </ul>
        </div>
        </div> 
        </div> 
        </>
    )
}

export default AdventureGuide 