import React, { Component } from "react";
import Contacts from "../components/contacts/Contacts";
import Loader from "react-loader-spinner";

class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }

  componentDidMount() {
    let self = this;
    self.setState({ loader: false });

    let button = document.getElementById("submit");
    console.log(button);

    async function addMessage(data) {
      let res = await fetch("http://localhost:3000/poruke", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          data,
        }),
      });
      let json = await res.json();
      return json;
    }
    button.addEventListener("click", (e) => {
      let ime = document.querySelector("#name-forma");
      let email = document.querySelector("#email-forma");
      let message = document.querySelector("#message");
      let data = {
        name: ime.value,
        email: email.value,
        message: message.value,
      };
      addMessage(data).then((res) => {
        console.log(res);
      });
    });
  }

  render() {
    return <Contacts />;
  }
}

export default ContactsPage;
