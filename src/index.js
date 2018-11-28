import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Home({ p, alertHandler }) {
  return (
    <div className="Home">
      <p onClick={e => alertHandler(e.target.innerText)}>Home: {p}</p>
      <input
        type="text"
        name="input text"
        placeholder="enter you value"
        onChange={e => alertHandler(e.target.value)}
      />
      <hr />
    </div>
  );
}

const Dream = ({ p }) => {
  return (
    <div>
      <p>Dream: {p}</p>
    </div>
  );
};

const Users = ({ users, indexHandler }) => {
  return (
    <div className="card users">
      {users.map(user => {
        return (
          <div className="d-flex">
            <p onClick={() => indexHandler(user.id)}>{user.name}</p>
            <p> ... {user.id}</p>
          </div>
        );
      })}
    </div>
  );
};

class App extends React.Component {
  state = {
    p: "hey , this is paragraph text",
    users: [
      { id: 1, name: "rashed" },
      { id: 2, name: "boss" },
      { id: 3, name: "king" },
      { id: 4, name: "rabin" }
    ]
  };

  indexHandler = id => {
    let name = this.state.users.findIndex(user => user.id === id);
    let myname = this.state.users[name].name;
    alert("my Name is: " + myname + " | AND My ID is: " + id);
  };

  alertHandler(name) {
    console.log(name);
    // alert('hello, i am' + e.target.value)
  }
  render() {
    return (
      <div>
        <p style={{ backgroundColor: "blue", color: "#fff" }}>header</p>
        <Home alertHandler={this.alertHandler.bind(this)} p={this.state.p} />
        <Dream p={this.state.p} />
        <Users
          users={this.state.users}
          indexHandler={this.indexHandler.bind(this)}
        />
        <p style={{ backgroundColor: "red", color: "#fff" }}>footer</p>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
