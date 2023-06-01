import * as React from "react";
import { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

type MainBoxProps = {};

type MainBoxState = {};

class MainBox extends Component<MainBoxProps, MainBoxState> {
  constructor(props: MainBoxProps) {
    super(props);

    this.state = {};

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
  }

  render() {
    return (
      <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen items-center">
        <PersonalInfoForm getPersonalInfo={this.getPersonalInfo} />
      </div>
    );
  }
}

export default MainBox;
