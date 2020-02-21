import React, { Component } from "react";
import Spinners from "./Spinner";

const WithSpinner = WrappedComponent =>
  class WithSpinner extends Component {
    state = {
      isLoading: true
    };
    componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 3000);
    }
    render() {
      return this.state.isLoading ? (
        <Spinners />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default WithSpinner;
