import React, { Component } from "react";
import Blog from "../components/blog/Blog";
import blogGet from "../services/load-blog.service";
import Loader from "react-loader-spinner";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: {}, loader: true };
  }

  componentDidMount() {
    let self = this;
    blogGet().then(function (res) {
      self.setState({ blogs: res, loader: false });
    });
  }

  render() {
    console.log(this.state.blogs);
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
            type="TailSpin"
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
          <Blog blogs={this.state.blogs} />
        </>
      );
    }
  }
}

export default BlogPage;
