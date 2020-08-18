import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './TalentTrees.css'

function TalentTrees() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container Getting-Started">
        <h1 id="comment-thread-post" className="For-feed-header"> Talent Trees: </h1>
        <div className="talent-cont">
        <h1 id="comment-thread-post" className="For-feed-header"> | NOT MOBILE FRIENDLY |</h1>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> Browse all your possible talents here! Follow the link to Wowhead to start exploring possibilities. We 
                reccommend using a tablet or laptop. </h2>
        </div>
        </div>
        <a className="talents" href="https://classic.wowhead.com/talent-calc/embed/druid"> Embedded. </a>
        </div>
        
        </div> 
        </>
    )
}

export default TalentTrees 