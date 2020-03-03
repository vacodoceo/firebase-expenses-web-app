import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Login extends Component {
  render() {
    const { signInWithGoogle } = this.props;
    return (
      <div>
        <Button variant="contained" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </div>
    );
  }
}

export default Login;
