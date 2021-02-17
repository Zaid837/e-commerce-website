import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  render(){
    return (
      <div>
        <MainLayout>
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/hats" exact component={HatsPage}/>
            </Switch>
          </Router>
          </MainLayout>
      </div>
    );
  }
}

export default App;
