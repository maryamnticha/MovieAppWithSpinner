import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Spinners extends Component {
  render() {
    return (
      <div class="d-flex align-items-center">
        <strong className="Loading">Loading . . . </strong>
        <Spinner className="spinner" animation="border" />
      </div>
    );
  }
}
