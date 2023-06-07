import * as React from "react";
import { Component } from "react";

type personalInfo = {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
  };
};

type CVState = {};

class CV extends Component<personalInfo, CVState> {
  constructor(props: personalInfo) {
    super(props);

    this.state = {};
  }

  render() {
    const { firstName, lastName, address, phoneNumber, email } =
      this.props.personalInfo;
    return (
      <div>
        {firstName} {lastName} lives at {address}, {phoneNumber}, {email}
      </div>
    );
  }
}

export default CV;
