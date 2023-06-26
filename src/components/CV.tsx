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
      <div className="flex flex-col flex-grow box-border w-1/2 p-4 gap-3 bg-gray-300">
        <div>
          {firstName} {lastName} {address} {phoneNumber} {email}
        </div>
        {this.props.ExperienceInfoArray.map((Experience) => (
          <div key={Experience.ID}>
            {Experience.position} at {Experience.company} in {Experience.city}{" "}
            from {Experience.beginningYear} to {Experience.endingYear}
          </div>
        ))}
        {this.props.EducationInfoArray.map((education) => (
          <div key={education.ID}>
            {education.degree} in {education.subject} from{" "}
            {education.universityName} in {education.cityName} attending from{" "}
            {education.startDate} to {education.endDate}
          </div>
        ))}
      </div>
    );
  }
}

export default CV;
