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
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loader
            type="Puff"
            color="#00BFFF"
            height={300}
            width={300}
            timeout={3000} //3 secs
          />
        </div>
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
