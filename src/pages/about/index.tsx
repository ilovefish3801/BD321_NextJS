import { Component, ReactNode } from "react";

interface State {
  counter: number
}

interface Props { }

class About extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }
  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }))
  }
  
  render(): ReactNode {
    return (
      <>
        <h2>About page: {this.state.counter}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    )
  }
}


export default About