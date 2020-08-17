import React, { useState, useEffect } from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ProfileSettings.css'

function ProfileSettings(props) {
    console.log(props.user)
    console.log(props.loggedInStatus)
    const userInfo=props.user 
    let userData; 
    if (props.loggedInStatus === "NOT_LOGGED_IN") 
    userData = (
        <div> 
            <a href="/"> Please Log in to view your dashboard. </a>
        </div>
    ); 
      else {
        if (!props.user) 
        userData = (
            <div>
                <p> Loading... </p>
            </div>
        );
         else if (props.user) {
           
            userData = (
                    <>
                 <div className="card-header">
                
                <h3> Avatar: </h3>
                {userInfo.avatar === null || "" ? 
                 <p> You haven't chosen an avatar yet.</p> : 
                 <img src={userInfo.avatar} /> 
                }
                {userInfo.nickname === null || "" ? 
                <p>  <span className="greenwrap">You haven't chosen a nickname yet. Without a nickname you will be refered to as "Anonymous Druid" when you make posts.</span> </p> :
                <p> <p className="nickname-edit">  Nickname:<span className="greenwrap"> {userInfo.nickname} </span> </p></p>}
                <h4> Email: <span className="greenwrap"> {userInfo.email} </span></h4>
                <a className="link-overide" href="/Dashboard/ProfileSettings/Edit"> Edit Profile </a>
                </div> 
                <div className="card-body">
                {userInfo.server === null || "" ? 
                <p> <span className="greenwrap"> You haven't chosen a server yet.</span></p> :
                <p>  Server: <span className="greenwrap"> {userInfo.server} </span></p>}
                {userInfo.server_region === null || "" ? 
                <p> <span className="greenwrap"> You haven't chosen a region yet.</span></p> :
                <p>  Server Region: <span className="greenwrap"> {userInfo.server_region} </span></p>}
                {userInfo.spec === null || "" ? 
                <p> <span className="greenwrap"> You haven't indicated a spec yet.</span></p> :
                <p>  Spec: <span className="greenwrap"> {userInfo.spec} </span></p>}
                </div>
                </>
                )
            
        }
    }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1 id="comment-thread-post" className="For-feed-header"> Profile Settings: </h1>
        <div className="post-spef-widthcont card text-white bg-dark mb-3" >
        {userData}
        </div> 
        </div>
        </>
    )
}

export default ProfileSettings 