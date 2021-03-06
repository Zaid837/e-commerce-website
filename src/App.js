import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import {connect } from "react-redux";
import {createStructuredSelector} from "reselect"
import HomePage from './pages/Home';
import Shop from './pages/shop/Shop';
import CheckoutPage from './pages/checkout/checkout'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, addUserData } from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user-actions";
import {selectCurrentUser} from "./redux/user/user.selector";
 

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
                <Route path="/shop"  component={Shop}/>
                <Route path="/signIn" exact render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)}/>
                <Route path="/checkout" exact component={CheckoutPage}/>
              </Switch>
            </MainLayout>
          </Router>
         
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps )(App);
