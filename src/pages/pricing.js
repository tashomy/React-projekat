import React, { Component } from "react";
import Pricing from "../components/pricing/Pricing";
import Loader from "react-loader-spinner";

class PricingPage extends Component {
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
            height={300}
            width={300}
            timeout={3000} //3 secs
          />
        </>
      );
    } else {
      return (
        <>
          <Pricing />
        </>
      );
    }
  }
}

export default PricingPage;
