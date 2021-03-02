import React from "react";

class Computations extends React.Component {
  constructor(props) {
    super(props);

    // this.setNum = this.setNum.bind(this);
    // this.setNum2 = this.setNum2.bind(this);
    // this.add = this.add.bind(this);
    // this.subtract = this.subtract.bind(this);
    // this.multiply = this.multiply.bind(this);
    // this.divide = this.divide.bind(this);
    // this.clear = this.clear.bind(this);
  }

  add(event) {
    event.preventDefault();
    props.context.setState({
      result: parseInt(props.num1) + parseInt(props.num2),
    });
  }
  subtract(event) {
    event.preventDefault();
    props.context.setState({
      result: parseInt(props.num1) - parseInt(props.num2),
    });
  }
  multiply(event) {
    event.preventDefault();
    props.context.setState({
      result: parseInt(props.num1) * parseInt(props.num2),
    });
  }
  divide(event) {
    event.preventDefault();
    props.context.setState({
      result: parseInt(props.num1) / parseInt(props.num2),
    });
  }

  render() {
    return (
      <div className="">
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>X</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Computations;
