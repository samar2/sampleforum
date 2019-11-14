import React, { Component } from "react";
import DiscussionAnswer from '../DiscussionAnswer/DiscussionAnswer'
class SingleDiscussion extends Component {
  render() {
    return (
        <>
      <div className="singlediscussioncontainer">
        
        <div style={{padding: '20px 10px 0', position: 'relative'}}>
        <div className="maindiscussion">
          <img
            className="avatar"
            src="https://avatars1.githubusercontent.com/u/19823862?v=4"
          />
          <div className="columnsmall">
          <div className='userinfo'>Han Lee
          <a className="gitstyle">
            <i className="fa giticonstyle">{"\u{1F43B}"}</i>
            hanlakewind
          </a></div>
          <div className='dateinfo'>
          10/11/2018
          </div>
          </div>
          </div>
          <div className='singletitle'>This is awesome!!</div>
          <div className='singlecontent'>I've seen you to develop this app. You also use my feedback while development. Now this is completed. Thanks and Congratulations for you success.</div>
        </div>

      </div>
      <br/>
      <br/>
      <div className='answereditor'>
      <textarea style={{'width':'100%', height:'200px'}}>
      
      </textarea>
      <button class="buttonanswer" style={{alignSelf: 'center'}}>Reply</button>
      </div>
      <DiscussionAnswer/>

      <DiscussionAnswer/>
      <DiscussionAnswer/>
      </>

    );
  }
}

export default SingleDiscussion;
