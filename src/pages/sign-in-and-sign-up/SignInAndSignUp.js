import React from "react";

import "./SignInAndSignUp.css";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

function SignInAndSignUp() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
