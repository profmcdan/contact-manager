import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="">
          <Header branding="CManager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
