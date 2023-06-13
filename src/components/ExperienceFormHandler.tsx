import * as React from "react";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

type ExperienceInfoArray = {
  ID: number;
  position: string;
  company: string;
  city: string;
  beginningYear: number;
  endingYear: number;
}[];

function ExperienceFormHandler() {
  const ExperienceArray = [1, 2];

  const ExperienceInfoArray: ExperienceInfoArray = [];

  function getExperienceInfo(
    ID: number,
    position: string,
    company: string,
    city: string,
    beginningYear: number,
    endingYear: number
  ) {
    const check: boolean = ExperienceInfoArray.some(
      (Experience) => Experience.ID === ID
    );
    const experienceInfo = {
      ID: ID,
      position: position,
      company: company,
      city: city,
      beginningYear: beginningYear,
      endingYear: endingYear,
    };
    if (check === false) {
      ExperienceInfoArray.push(experienceInfo);
      console.log(ExperienceInfoArray);
    } else {
      ExperienceInfoArray.splice(
        ExperienceInfoArray.findIndex((Experience) => Experience.ID === ID),
        1
      );
      ExperienceInfoArray.push(experienceInfo);
      console.log(ExperienceInfoArray);
    }
  }

  return (
    <div className="flex flex-col flex-grow box-border w-1/2 p-4 gap-3 bg-gray-300">
      <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
      {ExperienceArray.map((id) => (
        <ExperienceForm
          key={id}
          IDProp={id}
          getExperienceInfo={getExperienceInfo}
        />
      ))}
    </div>
  );
}

export default ExperienceFormHandler;
