import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home';
import Shop from './pages/shop/Shop';
 

class App extends React.Component { 
  render(){
    return (
      <div>
          <Router>
            <MainLayout>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/shop" exact component={Shop}/>
              </Switch>
            </MainLayout>
          </Router>
         
      </div>
    );
  }
}

export default App;
