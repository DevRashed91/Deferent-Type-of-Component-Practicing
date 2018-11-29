import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import "./styles.css";

const Form = props => {
  let { name, email, pass, emailstatus } = props.form;

  return (
    <div className="card mb-4">
      <div className="form-group">
        <input
          type="text"
          placeholder="enter Name"
          className="form-control mb-2"
          value={name}
        />
        <input
          type="text"
          placeholder="enter Email"
          className="form-control mb-2"
          value={email}
        />
        {emailstatus ? (
          <input
            type="text"
            placeholder="enter Password"
            className="form-control mb-2"
            value={pass}
          />
        ) : null}
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

class Qr extends Component {
  state = {
    form: {
      name: "",
      email: ""
    }
  };
  render() {
    let { form } = this.state;

    return (
      <div>
        <h4>QR:</h4>
        <Form form={form} />
      </div>
    );
  }
}

class Email extends Component {
  state = {
    form: {
      name: "",
      email: "",
      pass: "",
      emailstatus: true
    }
  };

  render() {
    let { form } = this.state;

    return (
      <div>
        <h4>Email:</h4>
        <Form form={form} />
      </div>
    );
  }
}

const Nav = () => {
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb-item">
        <NavLink to="/qr">Qr</NavLink>
      </li>
      <li className="breadcrumb-item">
        <NavLink to="/email">Email</NavLink>
      </li>
      <li className="breadcrumb-item">
        <NavLink to="/emaildhgdjf">404</NavLink>
      </li>
    </ul>
  );
};

const Error = () => <h2>file not found</h2>;

class App extends Component {
  state = [
    { name: "rashed" },
    { email: "fdfkjh@figk.com" },
    { pass: "djgdfjk" }
  ];
  render() {
    return (
      <div className="m-4">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Qr} />
              <Route path="/qr" component={Qr} />
              <Route path="/email" component={Email} />
              <Route exact component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
