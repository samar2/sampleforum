import React, { Component } from "react";
import { Link } from "react-router-dom";

class DiscussionBox extends Component {
  render() {
    return (
        <>
        
      <div className="discussionbox">
        <div className="discussiontitle">
          <Link to="/singleDiscussion" className="forumlink">
            This is awesome!!
          </Link>
        </div>
        <div className="posterinfo">
          <a className="postername">Han Lee</a>
          <a className="gitstyle">
            <i className="fa giticonstyle">{"\u{1F43B}"}</i>
            hanlakewind
          </a>
        </div>
        <div className="discussionboxfooter">
          <div className="postinfocontainer">
            <span className="postinfo">10/11/2018</span>
            <span className="postinfo"> 2 answers</span>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default DiscussionBox;
