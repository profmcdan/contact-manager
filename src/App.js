import React from "react";
import Contact from "./components/Contact";
import Header from "./components/common/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App";

class App extends React.Component {
  render() {
    const contactInfo = {
      name: "Ola Ojo",
      email: "ojo@gmail.com",
      phone: "555-555-5555",
    };
    return (
      <div className="App">
        <Header branding="CManager" />
        <div className="container">
          <Contact contact={contactInfo} />
          <Contact contact={contactInfo} />
        </div>
      </div>
    );
  }
}

export default App;
