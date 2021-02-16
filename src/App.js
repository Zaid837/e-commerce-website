import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home';

class App extends React.Component {
  render(){
    return (
      <div>
          <Router>
            <Switch>
              <Route path="/" exact><MainLayout><HomePage/></MainLayout></Route>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
