import React, { Component } from "react";

export default class StateinClass extends Component {
  constructor(props) {
    super(props);
    // states in Class Component

    this.state = {
      count: 1,
      name: "pankaj",
   
    };

    // Binding the Function
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1, name: "Laiji" });
  };

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Props Recieved from Parent</h2>
        <h3>{this.props.data}</h3>
        <h3>Name: {this.state.name}</h3>
        <h3>Count:{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
