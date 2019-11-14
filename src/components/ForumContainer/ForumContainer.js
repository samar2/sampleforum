import React, { Component } from "react";
import DiscussionBox from '../DiscussionBox/DiscussionBox'
class ForumContainer extends Component {
  render() {
    return (
        <>
        <button className="newdiscussion">New Discussion</button>
      <div className="stylescontainer">
      
        <div className="stylesheader">
          <span className="stylestitle">Discussions</span>
        </div>
       <DiscussionBox/>
       <DiscussionBox/>
       <DiscussionBox/>
       <DiscussionBox/>
       <DiscussionBox/>
       <DiscussionBox/>
       
      </div>
      </>
    );
  }
}
export default ForumContainer;
