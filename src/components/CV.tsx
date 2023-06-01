import * as React from "react";
import { Component } from "react";

type CVProps = {
  firstName: string;
};

type CVState = {};

class CV extends Component<CVProps, CVState> {
  constructor(props: CVProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{this.props.firstName}</div>
      </div>
    );
  }
}

export default CV;
