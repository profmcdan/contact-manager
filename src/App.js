import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Contacts from "./components/Contacts";

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Header branding="CManager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
