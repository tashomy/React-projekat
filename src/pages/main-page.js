import React, { Component } from "react";
import { NavbarBrand } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Features from "../components/features/Features";
import Gallery from "../components/gallery/Gallery";
import Nintendo from "../components/nintendo/Nintendo";
import Pricing from "../components/pricing/Pricing";
import Showcase from "../components/showcase/Showcase";
import Routes from "../router";
import Loader from "react-loader-spinner";

class Page extends Component {
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
        <div className="main-container">
          <Showcase />
          <Nintendo />
        </div>
      );
    }
  }
}

export default Page;
