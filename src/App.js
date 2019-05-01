import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Contacts from "./components/contact/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contact/AddContact";
import AddContactRef from "./components/contact/AddContactRef";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="">
          <Header branding="CManager" />
          <div className="container">
            {/* <AddContact /> */}
            <AddContactRef />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
