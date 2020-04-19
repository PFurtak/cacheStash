import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AuthState from './context/auth/AuthState';

import CacheState from './context/cache/CacheState';

const App = () => {
  return (
    <AuthState>
      <CacheState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </CacheState>
    </AuthState>
  );
};

export default App;
