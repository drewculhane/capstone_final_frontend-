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
        <h1> Racial Passives: </h1> 
        </div>
        <div className="card-body">
          <h2> As a night elf druid you have access to some pretty killer racial passives. </h2>
          <h2> ....What on earth is a racial passive, you might ask? </h2>
          <h2> A racial passive is a quality/skill you automatically possess by virtue of your race in WoW.</h2>
          <h2> The Night elf racial passives are: </h2>
          <ul>
              <li> "Wisp Spirit". When you die you become a floating elf head, gaining 50% extra speed over other ghosts as you travel from the closest graveyard in the spirit world
                  to your corpse to resurrect. While this may not mean anything to you now,
                 players die a lot in WoW, and over time you will realise that this RP is pretty epic.  
              </li>
              <li> "Shadowmeld". This RP gives any Night Elf player the ability to dissappear into thin air on the spot, and remain that way as long as you don't move. Very handy
                  if you need to grab a snack while playing, or waiting for MOBs to respawn. If this cool RP wasn't enough, as a Druid, this RP makes your "prowl" ability in Cat Form
                  even more effective at hiding you from hostile MOBs.   </li>
                  <li> "Quickness" This RP gives you an extra 1% chance to dodge attacks. As you get to a higher level, the agility stat stacks your dodge %, and while 
                      right now an extra 1% dodge doesn't sound meaningful, it makes a difference. Many "Best in Slot" gear items for Feral druids add an extra few % chances to dodge. </li>
                      <li> "Nature Resistance". This RP makes sense, since Night Elves literally live in a tree! This gives you +10 resistance points to nature attacks automatically. Convenient if you are fighting enemies with natural attacks. Maybe not as exciting as "Wisp Spirit" and "Shadowmeld", but useful nonetheless.  </li>
          </ul>
        </div>
        </div>
        </div>
        </>
    )
}

export default GettingStarted 