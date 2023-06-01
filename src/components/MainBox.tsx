import * as React from "react";
import { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import CV from "./CV";

type MainBoxProps = {};

type MainBoxState = {
  firstName: string;
};

class MainBox extends Component<MainBoxProps, MainBoxState> {
  constructor(props: MainBoxProps) {
    super(props);

    this.state = {
      firstName: "",
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
    console.log(
      `Hello ${firstName} ${lastName}, you live at ${address}. Your phone number is ${phoneNumber} and your email is ${email}`
    );
    this.setState({
      firstName: firstName,
    });
  }

  render() {
    return (
      <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen items-center">
        <PersonalInfoForm getPersonalInfo={this.getPersonalInfo} />
        <CV firstName={this.state.firstName} />
      </div>
    );
  }
}

export default MainBox;
