import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/Home';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, addUserData } from './firebase/firebase.utils'
 

class App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await addUserData(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);

        })
      }
      this.setState({currentUser : userAuth});
      
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
