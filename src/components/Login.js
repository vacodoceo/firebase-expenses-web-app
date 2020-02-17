import React, { Component } from "react";

class Login extends Component {
  render() {
    const { signInWithGoogle } = this.props;
    return (
      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    );
  }
}

export default Login;
