import React, { Component } from "react";
import About from "../components/about/About";
import Loader from "react-loader-spinner";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }

  componentDidMount() {
    let self = this;
    self.setState({ loader: false });
  }
  render() {
    if (this.state.loader == true) {
      return (
        <>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </>
      );
    } else {
      return (
        <>
          <About />
        </>
      );
    }
  }
}

export default AboutPage;
