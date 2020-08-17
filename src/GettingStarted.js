import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './GettingStarted.css'

function GettingStarted() {
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1 id="comment-thread-post" className="For-feed-header"> Getting Started </h1>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
        <h1> Congratulations on choosing one of the most versatile classes/races in WoW Classic! </h1> 
        <h1> We all need some guidance at some point, </h1> 
        <h1> so here is some cool insights we think will help you out.</h1> 
        </div>
        </div>
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
        <h1> <span className="greenwrap"> Racial Passives: </span> </h1> 
        </div>
        <div className="card-body">
          <h2> As a night elf druid you have access to some pretty killer racial passives. </h2>
          <h2> ....What on earth is a racial passive, you might ask? </h2>
          <h2> A racial passive is a quality/skill you automatically possess by virtue of your race in WoW.</h2>
        </div> 
        </div> 
        
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
        <h2> <span className="greenwrap">The Night elf racial passives are:</span> </h2>
        </div>
        </div> 
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> <span className="greenwrap">"Wisp Spirit</span> </h2> 
        <div className="card-body">
          <h2> When you die you become a floating elf head, gaining 50% extra speed over other ghosts as you travel from the closest graveyard in the spirit world
                  to your corpse to resurrect. While this may not mean anything to you now,
                 players die a lot in WoW, and over time you will realise that this RP is pretty epic.  
              </h2>
        </div>
        </div> 
        </div> 
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> <span className="greenwrap">"Shadowmeld" </span></h2> 
        <div className="card-body">
          <h2> This RP gives any Night Elf player the ability to dissappear into thin air on the spot, and remain that way as long as you don't move. Very handy
                  if you need to grab a snack while playing, or waiting for MOBs to respawn. If this cool RP wasn't enough, as a Druid, this RP makes your "prowl" ability in Cat Form
                  even more effective at hiding you from hostile MOBs.
              </h2>
        </div>
        </div> 
        </div> 
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> <span className="greenwrap">"Quickness"</span> </h2> 
        <div className="card-body">
          <h2>  This RP gives you an extra 1% chance to dodge attacks. As you get to a higher level, the agility stat stacks your dodge %, and while 
                      right now an extra 1% dodge doesn't sound meaningful, on ocassion, it makes the difference between life or death. Many "Best in Slot" gear items for Feral druids add an extra few % chances to dodge or critical-hit.
              </h2>
        </div>
        </div> 
        </div> 
        <div className="post-spef-widthcont card-choices card text-white bg-dark mb-3" >
        <div className="card-header">
            <h2> <span className="greenwrap">"Nature Resistance" </span></h2> 
        <div className="card-body">
          <h2>  This RP makes sense, since Night Elves literally live in a tree! This gives you +10 resistance points to nature attacks automatically. Convenient if you are fighting enemies with natural attacks. Maybe not as exciting as "Wisp Spirit" and "Shadowmeld", but useful nonetheless.
              </h2>
        </div>
        </div> 
        </div> 
        </div>
        </>
    )
}

export default GettingStarted 