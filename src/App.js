import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import {connect } from "react-redux";
import HomePage from './pages/Home';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, addUserData } from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user-actions";
 

class App extends React.Component { 


  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await addUserData(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
            })
          }); 
      }
      setCurrentUser( userAuth);
      
  })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
          <Router>
            <MainLayout >
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps )(App);
