import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            incrementHand={this.props.incrementHand}
            onDecrement={this.props.onDecrement}
          >
            <h1 className="m-3">Counter {counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
