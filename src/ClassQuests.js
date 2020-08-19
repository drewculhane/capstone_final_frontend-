import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ClassQuests.css'

function ClassQuests() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1 id="comment-thread-post" className="For-feed-header"> More Resources: </h1>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <ul> 
                <li> BiS Resto Druid Gear:  <a href="https://www.icy-veins.com/wow-classic/restoration-druid-healer-pve-gear-best-in-slot" target="_blank"> <span className="greenwrap">CLICK HERE  </span></a></li>
                <li>  BiS Balance Druid Gear:<a href="https://www.icy-veins.com/wow-classic/balance-druid-ranged-dps-pve-gear-best-in-slot" target="_blank"> <span className="greenwrap"> CLICK HERE </span></a></li>
                <li>  BiS Feral/Tank Druid Gear: <a href="https://www.icy-veins.com/wow-classic/feral-druid-tank-pve-gear-best-in-slot" target="_blank"> <span className="greenwrap"> CLICK HERE </span></a></li>
                <li> Druid Class Quests: <span className="greenwrap"> <a href="https://classic.wowhead.com/guides/druid-class-quests-classic-wow" target="_blank">  </span></a></li>
            </ul>
        </div>
        </div> 
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <ul> 
            <li> Druid AddOns Galore! :  <a href="https://www.icy-veins.com/wow-classic/classic-guide-to-druids-best-addons" target="_blank"> <span className="greenwrap"> CLICK HERE </span></a></li>
            <li> Sometimes Questie bugs out.... </li>
            <li> ...lucky there is Quest support and more on WoWhead Classic!  <a href="https://classic.wowhead.com/" target="_blank"> <span className="greenwrap"> CLICK HERE </span></a></li>
            </ul>
        </div>
        </div> 
        </div>
        </>
    )
}

export default ClassQuests