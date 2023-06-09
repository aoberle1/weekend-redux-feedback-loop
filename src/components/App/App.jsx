import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../../Success/Success';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* multi part form begins here */}
      <form>
      <Router>
        <Link to='/'>Home</Link>
        <Route exact path='/'>
          <Feeling />
        </Route>
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
        <Route exact path='/support'>
          <Support />
        </Route>
        <Route exact path='/comments'>
          <Comment />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
      </Router>
      </form>

    </div>
  );
}

export default App;
