import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/signIn/sign-in.component";
import SignUp from "../../components/signUp/signUp.component";

const SignInAndSignUp = () => {
  return (
    <div className="signInAndSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
