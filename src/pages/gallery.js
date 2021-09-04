import React, { Component } from "react";
import Gallery from "../components/gallery/Gallery";
import Loader from "react-loader-spinner";

class GalleryPage extends Component {
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
          <Gallery />
        </>
      );
    }
  }
}

export default GalleryPage;
