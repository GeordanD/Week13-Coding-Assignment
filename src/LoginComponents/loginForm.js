//TODO Center of page;
import React from "react";
import SubmitButton from "./submitButton";
import Username from "./username";
import Password from "./password";
import NavBar from "./navBar";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <h3>Log In</h3>
        <div id="loginForm" className="form-control">
          <form>
            <Username />
            <Password />
            <br></br>
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}
