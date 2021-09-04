import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getClassSpan()}>{this.formatCount()}</span>

        <button
          onClick={() => {
            this.props.incrementHand(this.props.counter);
          }}
          className={this.getClasses()}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className={this.getClasses()}
        >
          decrement
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.counter);
          }}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </div>
    );
  }
  getClassSpan() {
    let value = this.props.counter.value;
    let clas = "badge m-2 p-3 bg-";
    clas += value === 0 ? "warning" : "dark";
    return clas;
  }
  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  getClasses() {
    let clas = "btn m-2 btn-sm btn-";
    clas += this.props.counter.value === 0 ? "primary" : "primary";
    return clas;
  }
}
export default Counter;
