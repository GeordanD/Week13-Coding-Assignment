import React from "react";

export default class Password extends React.Component {
    render() {
        return (
          <input
            type="password"
            autoComplete="on"
            placeholder="Password"
          ></input>
        );
    }
}