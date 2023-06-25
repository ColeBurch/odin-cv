import * as React from "react";
import { Component } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceFormHandler from "./ExperienceFormHandler";
import EducationFormHandler from "./EducationFormHandler";
import CV from "./CV";

type ExperienceInfo = {
  ID?: number;
  position?: string;
  company?: string;
  city?: string;
  beginningYear?: number;
  endingYear?: number;
};

type EducationInfo = {
  ID?: number;
  degree?: string;
  subject?: string;
  universityName?: string;
  cityName?: string;
  startDate?: number;
  endDate?: number;
};

type MainBoxProps = {};

type MainBoxState = {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
  };
  ExperienceInfoArray: Array<ExperienceInfo | null>;
  EducationInfoArray: Array<EducationInfo | null>;
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
      ExperienceInfoArray: [],
      EducationInfoArray: [],
    };

    this.getPersonalInfo = this.getPersonalInfo.bind(this);
    this.passExperienceInfo = this.passExperienceInfo.bind(this);
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

  passExperienceInfo = (ExperienceInfo: Array<ExperienceInfo | null>) => {
    this.setState({
      ExperienceInfoArray: ExperienceInfo,
    });
  };

  passEducationInfo = (EducationInfo: Array<EducationInfo | null>) => {
    this.setState({
      EducationInfoArray: EducationInfo,
    });
  };

  render() {
    return (
      <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen items-center">
        <PersonalInfoForm getPersonalInfo={this.getPersonalInfo} />
        <ExperienceFormHandler passExperienceInfo={this.passExperienceInfo} />
        <EducationFormHandler passEducationInfo={this.passEducationInfo} />
        <CV
          personalInfo={this.state.personalInfo}
          ExperienceInfoArray={this.state.ExperienceInfoArray}
          EducationInfoArray={this.state.EducationInfoArray}
        />
      </div>
    );
  }
}

export default MainBox;
