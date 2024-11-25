import React from "react";
import LinkButton from "../reusable/linkButton";

function RoutesLink(){
    return (
      <div>
        <LinkButton text="fb" url="fb.com"/> 
        <LinkButton text="Music" url="Music.com"/>
        <LinkButton text="Video" url="Video.com"/> 
        <LinkButton text="live" url="Live.com"/>
        <LinkButton text="Football" url="Football.com"/> 
        <LinkButton text="News" url="News.com"/>
        <LinkButton text="Podcast" url="Podcast.com"/>
        <LinkButton text="CNN" url="CNN.com"/>
        <LinkButton text="Alljazera" url="Alljazera.com"/>
        <LinkButton text="Africa" url="Africa.com"/>
     </div>
    );
}

export default RoutesLink;