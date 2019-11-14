import React, { Component } from "react";
class DiscussionAnswer extends Component {
  render() {
    return (
      <div className="discussionanswer">
        <div className="answerinfo">
          <img
            className="avatar"
            src="https://avatars1.githubusercontent.com/u/19823862?v=4"
          />
          <div className="columnsmall">
            <div className="userinfo">
              Person X
              <a className="gitstyle">
                <i className="fa giticonstyle">{"\u{1F43B}"}</i>
                xxxxxxx
              </a>
            </div>
            <div className="dateinfo">15/11/2018</div>
          </div>
        </div>
        <div className='answercontent'>Hello..</div>
      </div>
    );
  }
}

export default DiscussionAnswer;
