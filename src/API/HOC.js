import React, { Component } from "react";

export const HOC = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        items: [],
        dataIsLoaded: false,
      };
    }
    componentDidMount() {
      fetch("http://localhost:3000/easy")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            dataIsLoaded: true,
          });
        });
    }
    render() {
      return <WrappedComponent items={this.state.items} />;
    }
  }
  return NewComponent;
};
