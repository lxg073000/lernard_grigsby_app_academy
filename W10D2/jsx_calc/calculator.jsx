import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
    this.setNum = this.setNum.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum(event) {
    event.preventDefault();
    this.setState({
      num1: parseInt(event.target.value),
    });
  }
  setNum2(event) {
    event.preventDefault();
    this.setState({
      num2: parseInt(event.target.value),
    });
  }

  add(event) {
    event.preventDefault();
    this.setState({
      result: this.state.num1 + this.state.num2,
    });
  }
  subtract(event) {
    event.preventDefault();
    this.setState({
      result: this.state.num1 - this.state.num2,
    });
  }
  multiply(event) {
    event.preventDefault();
    this.setState({
      result: this.state.num1 * this.state.num2,
    });
  }
  divide(event) {
    event.preventDefault();
    this.setState({
      result: this.state.num1 / this.state.num2,
    });
  }

  clear(event) {
    event.preventDefault();
    this.setState({
      num1: "",
      num2: "",
      result: 0,
    });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div className="fun">
        <h1>{result}</h1>
        <input value={num1} onChange={this.setNum} type="text"></input>
        <input value={num2} onChange={this.setNum2} type="text"></input>
        <button onClick={this.clear}>CLEAR</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>X</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
