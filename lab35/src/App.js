import React, { Component } from "react";

function App() {
  return (
    <div>
      <UserInfo name="Ivan" age="16" />
      <Counter />
    </div>
  );
}

function UserInfo(props) {
  return <h1>Привіт, мене звати {props.name}, мені {props.age} років</h1>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Лічильник: {this.state.count}</h2>
        <button onClick={this.increment}>Збільшити</button>
      </div>
    );
  }
}

export default App;
