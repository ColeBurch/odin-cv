import * as React from "react";
import { Component } from "react";

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

type CVInfo = {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
  };
  ExperienceInfoArray: Array<ExperienceInfo>;
  EducationInfoArray: Array<EducationInfo>;
};

type CVState = {};

class CV extends Component<CVInfo, CVState> {
  constructor(props: CVInfo) {
    super(props);

    this.state = {};
  }

  render() {
    const { firstName, lastName, address, phoneNumber, email } =
      this.props.personalInfo;
    return (
      <div>
        <div>
          {firstName} {lastName} {address} {phoneNumber} {email}
        </div>
        <div>
          {this.props.ExperienceInfoArray.map((Experience) => (
            <div>{Experience.position}</div>
          ))}
        </div>
        <div>
          {this.props.EducationInfoArray.map((education) => (
            <div>{education.degree}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default CV;
