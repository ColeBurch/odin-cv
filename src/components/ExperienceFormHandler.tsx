import * as React from "react";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function ExperienceFormHandler() {
  const ExperienceArray = [1, 2];

  function submitHandler() {}

  function getExperienceInfo(
    ID: number,
    position: string,
    company: string,
    city: string,
    beginningYear: number,
    endingYear: number
  ) {
    const experienceInfo = {
      ID: ID,
      position: position,
      company: company,
      city: city,
      beginningYear: beginningYear,
      endingYear: endingYear,
    };
    console.log(experienceInfo);
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
      <button onClick={submitHandler} className="bg-white rounded-lg">
        Submit Experience
      </button>
    </div>
  );
}

export default ExperienceFormHandler;
