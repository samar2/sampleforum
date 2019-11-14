import React from 'react';
import ForumContainer from './components/ForumContainer/ForumContainer'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleDiscussion from './components/SingleDiscussion/SingleDiscussion'

function App() {
  return (
    <div className="applayout">
    <Router>
      <Switch>
        <Route exact path='/' component={ForumContainer}/>
        <Route exact path='/singleDiscussion' component={SingleDiscussion}/>
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
