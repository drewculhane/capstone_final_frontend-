import React from 'react';
import DashboardLayout from './Layouts/DashboardLayout';
import './ForumFeed.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {dreamwayApi} from './apiConfig.js'
import axios from 'axios'

function ForumFeed(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${dreamwayApi}posts`);
            console.log("Ideas - useEffect - response", response);
            setPosts(response.data);
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])
      const postArray = posts.map((post)=> (
          <>
    <div className="card text-white bg-dark mb-3" >
    <div className="card-header"> 
    <img className="feed-avatar" src={post.user_avatar} />
    {post.user_display}
    <p className="date-slice">{post.updated_at.slice(0,10)}</p>
    <p>{post.updated_at.slice(11,16)}</p>
    </div>
    <div class="card-body">
    <Link className="link-overide" to={"/Forum/Feed/Post/" + post.id} >
    <h5 class="post-tile-text card-title">{post.title}</h5>
    </Link> 
    </div>
    </div>
        </>
      ))
    return (
        <>
        <DashboardLayout/> 
        <div className="Component-styles-container">
        <h1 className="For-feed-header"> Forum Feed </h1>
        <div className="Feed-cont-posts">
        {postArray}
        </div>
        </div>
       
        
        </>
    )
}

export default ForumFeed