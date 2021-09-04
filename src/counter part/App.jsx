import React, { Component } from "react";
import Counters from "./components/Counters";
import Nav from "./components/Nav";
import Someshit from "./components/Someshit";
class App extends Component {
  state = {
    counters: [
      { id: "1", value: "1" },
      { id: "2", value: "1" },
      { id: "3", value: "1" },
    ],
  };

  render() {
    return (
      <>
        <Nav
          Counters={this.state.counters.filter((x) => x.value > 0).length}
        ></Nav>
        {this.state.counters.filter((x) => x.value > 0).length ? (
          <Counters
            incrementHand={this.increment}
            onDecrement={this.decrementHandler}
            onDelete={this.deleteHandler}
            counters={this.state.counters}
          />
        ) : (
          <>
            <h1>nothing to show</h1>
          </>
        )}
        <Someshit />
      </>
    );
  }
  deleteHandler = (count) => {
    const counter = this.state.counters.filter((x) => x.id !== count.id);
    this.setState({ counters: counter });
    console.log(count);
  };
  increment = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    counters[index].value++;
    this.setState({ counters });
    console.log(count);
  };
  decrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
  };
}
export default App;
