import * as React from "react";
import { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceFormHandler from "./ExperienceFormHandler";
import CV from "./CV";

type MainBoxProps = {};

type MainBoxState = {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
  };
  experienceInfo: {
    ID: number;
    position: string;
    company: string;
    city: string;
    beginningYear: number;
    endingYear: number;
  }[];
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
      experienceInfo: [
        {
          ID: undefined,
          position: "",
          company: "",
          city: "",
          beginningYear: undefined,
          endingYear: undefined,
        },
      ],
    };

    this.getPersonalInfo = this.getPersonalInfo.bind(this);
    this.passExperienceInfo = this.passExperienceInfo.bind(this);
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

  passExperienceInfo(ExperienceInfo: Array<object>) {
    console.log(ExperienceInfo[0]);
  }

  render() {
    return (
      <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen items-center">
        <PersonalInfoForm getPersonalInfo={this.getPersonalInfo} />
        <ExperienceFormHandler passExperienceInfo={this.passExperienceInfo} />
        <CV personalInfo={this.state.personalInfo} />
      </div>
    );
  }
}

export default MainBox;
