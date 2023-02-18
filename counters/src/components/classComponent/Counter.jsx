import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // State initial value
    this.state = {
      count: 0,
    };

    // bind at constructor
    this.increment = this.increment.bind(this);
  }

  // Prototype'ta method tanimlama
  increment() {
    // alert("Hi");
    this.setState({
      count: this.state.count + 1,
    });
  }

  // handler definition via arrow function
  decrement = () => {
    // alert("Hi");
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="text-danger">Class Components</h2>
        <h2 className="display-4">Count : {this.state.count}</h2>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
          className="btn btn-danger"
        >
          CLR
        </button>
        <button onClick={this.decrement} className="btn btn-warning">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;
