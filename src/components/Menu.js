import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { user, signOut } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>Bienvenido {user.displayName}</p>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }
}

export default Menu;
