import * as React from "react";
import { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import CV from "./CV";

type MainBoxProps = {};

type MainBoxState = {
  personalInfo: object;
};

class MainBox extends Component<MainBoxProps, MainBoxState> {
  constructor(props: MainBoxProps) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: undefined,
        email: "",
      },
    };

    this.getPersonalInfo = this.getPersonalInfo.bind(this);
  }

  getPersonalInfo(
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: number,
    email: string
  ) {
    this.setState({
      personalInfo: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
      },
    });
  }

  render() {
    return (
      <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen items-center">
        <PersonalInfoForm getPersonalInfo={this.getPersonalInfo} />
        <CV personalInfo={this.state.personalInfo} />
      </div>
    );
  }
}

export default MainBox;
