import * as React from "react";
import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";

type ExperienceInfoArray = {
  ID: number;
  position: string;
  company: string;
  city: string;
  beginningYear: number;
  endingYear: number;
}[];

type ExperienceFormHandlerProps = {
  passExperienceInfo: Function;
};

const ExperienceFormHandler = (props: ExperienceFormHandlerProps) => {
  const [ExperienceArray, setExperienceArray] = useState([1]);

  const [experienceCount, setExperienceCount] = useState(2);

  const [ExperienceInfoArray, setExperienceInfoArray] = useState([]);

  useEffect(() => {
    props.passExperienceInfo(ExperienceInfoArray);
  }, [ExperienceInfoArray]);

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
    let check: boolean = ExperienceInfoArray.some(
      (Experience) => Experience.ID === experienceInfo.ID
    );
    if (check === false) {
      setExperienceInfoArray(
        [...ExperienceInfoArray, experienceInfo].sort(function (a, b) {
          return a.ID - b.ID;
        })
      );
    } else {
      setExperienceInfoArray(
        [
          ...ExperienceInfoArray.filter((Experience) => Experience.ID !== ID),
          experienceInfo,
        ].sort(function (a, b) {
          return a.ID - b.ID;
        })
      );
    }
  }

  function passExperience() {
    props.passExperienceInfo(ExperienceInfoArray);
  }

  function addExperience() {
    setExperienceCount((prevexperienceCount) => prevexperienceCount + 1);
    setExperienceArray([...ExperienceArray, experienceCount]);
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
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceFormHandler;
