import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form>
      <Router>
        <Link to='/'>Home/Feeling</Link>
        <Link to='/understanding'>Understanding</Link>
        <Link to='/support'>Support</Link>
        <Link to='/comments'>Comments</Link>
        <Link to='/review'>Review</Link>
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
      </Router>
      </form>
    </div>
  );
}

export default App;
