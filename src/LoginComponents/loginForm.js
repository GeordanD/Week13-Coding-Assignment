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

        <div id="loginForm" className="container">
          <br></br>
          <h3>Log In</h3>
          <br></br>
          <br></br>
          <form id="formContainer" className="container form-control">
            <Username />
            <Password />
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}
