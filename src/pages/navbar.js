import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";

class NavBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: {}, loader: true };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default NavBarPage;
