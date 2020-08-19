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
                <li> Druid Class Quests: <a className="greenwrap" href="https://classic.wowhead.com/guides/druid-class-quests-classic-wow" target="_blank"><span className="greenwrap"> CLICK HERE </span> </a> </li>
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
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
        <h2> Have you ever just wanted to watch the sunset in Auberdine? </h2>
        <h2> As a Night Elf, you're from the most beautiful part of Azeroth. We think you should see it properly.</h2>
        <div className="card-body">
        <h2> ..yeah, we're not biased at all right? </h2>
        <h2> Follow the link below and enjoy Auberdine for a while. </h2> 
        <h2> <a href="https://drewculhane.github.io/Auberdine-Animation-/" target="_blank"><span className="greenwrap">It's almost like you're there for real.</span></a> </h2> 
        </div>
        </div> 
        </div>
        </div>
        </>
    )
}

export default ClassQuests