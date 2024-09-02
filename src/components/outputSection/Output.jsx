import React from 'react';
import "./output.css"
import hiteshSir from "../images/hitesh-sir.png"
import dfimg from "../images/fetching-img.png"
export default function Output({data,fetching}) {
  return (<>
  <div className="outputsection-body">

<div className="profile">
<div className="person-img">
<div style={{backgroundImage:`url( ${!fetching?`${data.avatar_url?data.avatar_url:dfimg}`:dfimg  })`}} className={fetching?"load-img":"img"}>

</div>


</div>

<div className="person-personal">
<h1 className="person-name"> {data.name?data.name:<span style={{color:"rgba(255, 255, 240, 0.7)"}}>my-name :) </span>}</h1>
<div className="person-location">
    <div className="campany"> <i class="fa-solid fa-building"></i> {data.company===null? <span style={{color:"rgba(255, 255, 240, 0.7)"}}>Company :)</span>:data.company}</div>
    <div className="country"> <i class="fa-solid fa-location-dot"></i> {data.location?data.location:<span style={{color:"rgba(255, 255, 240, 0.7)"}}>location :)</span>}</div>
</div>

<div className="socila-links">
<ul>
    <li><a href={data.blog?data.blog:null} target='_main'> <i class="fa-solid fa-link"></i> {data.blog? data.blog.slice(0,30)+`${data.blog.length>30?"...":""}`: <span style={{color:"rgba(255, 255, 240, 0.7)"}}> {`https://blog :).com/${data.login}`} </span>} </a></li>
    <li><a href={data.html_url?data.html_url:null} target='_main'> <i class="fa-brands fa-github"></i>  <span>/</span> {data.html_url?data.html_url.slice(0,30)+`${data.html_url.length>30?"...":""}`:<span style={{color:"rgba(255, 255, 240, 0.7)"}}>{`https://github.com/${data.login} :)`} </span>}</a></li>
    <li><a> <i class="fa-brands fa-x-twitter"></i> <span>/</span> {data.twitter_username?data.twitter_username:<span style={{color:"rgba(255, 255, 240, 0.7)"}}> {`${data.login}/twitter :)`} </span>}</a></li>
</ul>

</div>


<div className="bio-btns">
<button>Bio</button>
<button>find more ...</button>

</div>


</div>


</div>

<div className="social">

<div className="social-box">

    <div className="socialbox-bgc">

<div className="count">
    <p>{data.public_repos}</p>
    <p>Repos</p>
</div>

<div className="count-logo"><i class="fa-solid fa-folder-open"></i></div>
</div>
</div>


<div className="social-box">
    <div className="socialbox-bgc">

<div className="count">
    <p>{data.followers}</p>
    <p style={{fontSize:"16px"}}>followers</p>
</div>

<div className="count-logo"><i class="fa-solid fa-users"></i></div>
</div>
</div>


<div className="social-box">
    <div className="socialbox-bgc">

<div className="count">
    <p>{data.following}</p>
    <p style={{fontSize:"16px"}}>following</p>


</div>

<div className="count-logo"><i class="fa-solid fa-user-plus"></i></div>
</div>
</div>


<div className="social-box">
    <div className="socialbox-bgc">

<div className="count">
    <p>{data.public_gists}</p>
    <p>{data.public_gists>=9?"Gists":"Gist"}</p>
</div>

<div className="count-logo">{`{`}<i class="fa-brands fa-github-alt"></i>{`}`}</div>
</div>
</div>


    
</div>



  </div>
  
  
  </>  )
}
