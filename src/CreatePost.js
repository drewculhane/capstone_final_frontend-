import React from 'react';
import {useState} from 'react'; 
import DashboardLayout from './Layouts/DashboardLayout';
import './CreatePost.css'
import PostCreateForm from './PostCreateForm';
import axios from 'axios'
import {dreamwayApi} from './apiConfig.js'
function CreatePost(props) {
    const [input, setInput]=useState({title: "", content: ""})
    let displayChoice; 
    if (!props.user.nickname) {
        displayChoice = "Anonymous Druid"
    } else {
         displayChoice = props.user.nickname
    }
    let avatarChoice; 
    if (!props.user.avatar || props.user.avatar == "") {
        avatarChoice = "https://res.cloudinary.com/dgmpgmo60/image/upload/v1597366961/Screen_Shot_2020-08-13_at_9.02.19_PM_ominua.png"
    } else if (props.user.avatar) {
        avatarChoice = props.user.avatar 
    }

    const handleChange = (event) => {
        setInput({
            ...input, 
            [event.target.name]: event.target.value, 
        });
    };
    const dataInputThree={
        user_avatar: avatarChoice, 
        user_display: displayChoice
    }
    console.log("input test", dataInputThree)
    const handleSubmit = (event) => {
        console.log("submit", input)
        event.preventDefault(); 
        const dataInputTwo={
            ...input, 
            ...dataInputThree
        }
        
        axios({
            url: `${dreamwayApi}users/${props.user.id}/posts`,
            method: "POST",
            data: dataInputTwo
          })
          props.history.push("/Forum/Feed")
          window.location.reload()
    }
    let postDataForm; 
    if (props.loggedInStatus === "NOT_LOGGED_IN") 
    postDataForm = (
        <div> 
            <div class="card text-white bg-dark mb-3" >
            <div class="card-header">
            <a href="/"> <span className="greenwrap">Please Log in to make a post. </span></a>
            </div>
            </div>
        </div>
    ); 
      else {
        if (!props.user) 
        postDataForm = (
            <div>
                <p> Loading... </p>
            </div>
        );
         else if (props.user) {
           
            postDataForm = (
                <>
                <img className="feed-avatar" src={avatarChoice} />
                <h4> {displayChoice}</h4>
                <PostCreateForm 
                post={input}
                setInput={setInput}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
                </>
                )
            
        }
    }
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container ">
        <h1 className="For-feed-header"> Create Post </h1>
        <div class="card text-white bg-dark mb-3 cont-margins-cp" >
        <div class="card-body">
        {postDataForm}
        </div> 
        </div>
        </div>
        </>
    )
}

export default CreatePost