import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/Home';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils'
 

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
      console.log(user)
  })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
          <Router>
            <MainLayout currentUser={this.state.currentUser}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/signIn" exact component={SignInAndSignUp}/>
              </Switch>
            </MainLayout>
          </Router>
         
      </div>
    );
  }
}

export default App;
