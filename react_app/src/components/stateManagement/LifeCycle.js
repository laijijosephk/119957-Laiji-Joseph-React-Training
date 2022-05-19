import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();

    console.log("Constructor called");
    this.state = {
      counter: 0,
      show: true,
    };
  }
  update = () => {
    this.setState({ counter: this.state.counter + 1, show: !this.state.show });
  };

  componentDidMount() {
    console.log("Component Mounted");
    // AJAX CAll
  }

  componentDidUpdate() {
    console.log("Component Updated");
    // AJAX CAll
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button className="btn btn-primary" onClick={this.update}>
          Update Counter
        </button>
        <hr />
        {this.state.show ? <ChildComponent /> : null}
      </div>
    );
  }
}

class ChildComponent extends Component {
  componentDidMount() {
    console.log("Child Component Mounted");
  }
  componentWillUnmount() {
    console.log("Child Component Unmounted");
  }
  render() {
    return (
      <>
        <h2>Child Component</h2>
      </>
    );
  }
}
