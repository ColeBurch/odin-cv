import * as React from "react";
import { Component } from "react";

type CVProps = {
  personalInfo: object;
};

type CVState = {};

class CV extends Component<CVProps, CVState> {
  constructor(props: CVProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <div></div>;
  }
}

export default CV;
