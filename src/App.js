import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Contacts from "./components/contact/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contact/AddContact";
import NotFound from "./components/NotFound";
import About from "./components/pages/About";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header branding="CManager" />
          <div className="container">
            <Switch>
              <Route component={Contacts} exact path="/" />
              <Route component={AddContact} exact path="/add" />
              <Route component={About} exact path="/about" />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
