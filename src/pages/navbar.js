import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";

class NavBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }

  componentDidMount() {
    let self = this;
    self.setState({ loader: false });
  }

  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default NavBarPage;
