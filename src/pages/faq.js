import React, { Component } from "react";
import Loader from "react-loader-spinner";

class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.state = {
      showMeOne: true,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: false,
      loader: true,
    };
  }

  componentDidMount() {
    let self = this;
    self.setState({ loader: false });
  }

  handleClick(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: true,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: false,
    });
  }
  handleClick2(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: true,
      showMeThree: false,
      showMeFour: false,
    });
  }
  handleClick3(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: true,
      showMeFour: false,
    });
  }
  handleClick4(event) {
    let id = event.target.id;
    console.log(id);

    this.setState({
      showMeOne: false,
      showMeTwo: false,
      showMeThree: false,
      showMeFour: true,
    });
  }

  render() {
    let faqItems = this.state.faqItems;
    console.log(faqItems);

    const divStyle = {
      marginTop: "50px",
    };
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
        <div className="faq">
          <div className="faq-choice">
            <button onClick={this.handleClick} id="Delivery" style={divStyle}>
              Delivery
            </button>
            <button onClick={this.handleClick2} id="Return" style={divStyle}>
              Return Policy
            </button>
            <button onClick={this.handleClick3} id="Where" style={divStyle}>
              Where to find us
            </button>
            <button onClick={this.handleClick4} id="Tech" style={divStyle}>
              Tech support
            </button>
          </div>

          {this.state.showMeOne ? (
            <div className="faq-part-1">
              <div className="faq-items">
                <h2>Delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis incidunt modi reprehenderit qui possimus
                  aspernatur doloremque labore excepturi assumenda.
                </p>

                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum aut facilis quis odio aperiam. Earum, est soluta?
                </p>
              </div>
              <div className="faq-items">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ab voluptatum natus autem similique sint praesentium error
                  cupiditate sed dolorum dolorem doloribus voluptas, qui dolor
                  accusamus assumenda labore voluptate tempora perspiciatis
                  quibusdam delectus animi asperiores fugit! Quod unde debitis
                  ad at eius excepturi delectus iusto earum tempore nesciunt
                  ratione veritatis aperiam nostrum necessitatibus, beatae
                  officiis alias pariatur facere, suscipit exercitationem,
                  voluptate iste asperiores vel mollitia! Deserunt optio iste
                  provident minima debitis!
                </p>
              </div>
            </div>
          ) : null}
          {this.state.showMeTwo ? (
            <div className="faq-part-2">
              <div className="faq-items">
                <h2>Return</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis incidunt modi reprehenderit qui possimus
                  aspernatur doloremque labore excepturi assumenda.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum aut facilis quis odio aperiam. Earum, est soluta?
                </p>
              </div>
              <div className="faq-items">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ab voluptatum natus autem similique sint praesentium error
                  cupiditate sed dolorum dolorem doloribus voluptas, qui dolor
                  accusamus assumenda labore voluptate tempora perspiciatis
                  quibusdam delectus animi asperiores fugit! Quod unde debitis
                  ad at eius excepturi delectus iusto earum tempore nesciunt
                  ratione veritatis aperiam nostrum necessitatibus, beatae
                  officiis alias pariatur facere, suscipit exercitationem,
                  voluptate iste asperiores vel mollitia! Deserunt optio iste
                  provident minima debitis!
                </p>
              </div>
            </div>
          ) : null}
          {this.state.showMeThree ? (
            <div className="faq-part-3">
              <div className="faq-items">
                <h2>Where</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis incidunt modi reprehenderit qui possimus
                  aspernatur doloremque labore excepturi assumenda.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi.
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum aut facilis quis odio aperiam. Earum, est soluta?
                </p>
              </div>
              <div className="faq-items">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ab voluptatum natus autem similique sint praesentium error
                  cupiditate sed dolorum dolorem doloribus voluptas, qui dolor
                  accusamus assumenda labore voluptate tempora perspiciatis
                  quibusdam delectus animi asperiores fugit! Quod unde debitis
                  ad at eius excepturi delectus iusto earum tempore nesciunt
                  ratione veritatis aperiam nostrum necessitatibus, beatae
                  officiis alias pariatur facere, suscipit exercitationem,
                  voluptate iste asperiores vel mollitia! Deserunt optio iste
                  provident minima debitis!
                </p>
              </div>
            </div>
          ) : null}
          {this.state.showMeFour ? (
            <div className="faq-part-4">
              <div className="faq-items">
                <h2>Tech</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis incidunt modi reprehenderit qui possimus
                  aspernatur doloremque labore excepturi assumenda.
                </p>

                <h3>Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum aut facilis quis odio aperiam. Earum, est soluta?
                </p>
              </div>
              <div className="faq-items">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ab voluptatum natus autem similique sint praesentium error
                  cupiditate sed dolorum dolorem doloribus voluptas, qui dolor
                  accusamus assumenda labore voluptate tempora perspiciatis
                  quibusdam delectus animi asperiores fugit! Quod unde debitis
                  ad at eius excepturi delectus iusto earum tempore nesciunt
                  ratione veritatis aperiam nostrum necessitatibus, beatae
                  officiis alias pariatur facere, suscipit exercitationem,
                  voluptate iste asperiores vel mollitia! Deserunt optio iste
                  provident minima debitis!
                </p>
              </div>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

export default FaqPage;
