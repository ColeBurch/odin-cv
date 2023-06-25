import * as React from "react";
import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";

type EducationFormHandlerProps = {
  passEducationInfo: Function;
};

type EducationObject = {
  ID?: number;
  degree?: string;
  subject?: string;
  universityName?: string;
  cityName?: string;
  startDate?: number;
  endDate?: number;
};

const EducationFormHandler = (props: EducationFormHandlerProps) => {
  const [educationInfoArray, setEducationInfoArray] = useState<
    EducationObject[] | null
  >([]);
  const [educationArray, setEducationArray] = useState<Array<number> | null>([
    1,
  ]);
  const [educationCount, setEducationCount] = useState<number>(2);

  useEffect(() => {
    props.passEducationInfo(educationInfoArray);
  }, [educationInfoArray]);

  const getEducationInfo = (
    ID: number,
    degree: string,
    subject: string,
    universityName: string,
    cityName: string,
    startDate: number,
    endDate: number
  ) => {
    const educationInfo = {
      ID,
      degree,
      subject,
      universityName,
      cityName,
      startDate,
      endDate,
    };
    let check: boolean = educationInfoArray.some(
      (education) => education.ID === educationInfo.ID
    );
    if (check === false) {
      setEducationInfoArray(
        [...educationInfoArray, educationInfo].sort(function (a, b) {
          return a.ID - b.ID;
        })
      );
    } else {
      setEducationInfoArray(
        [
          ...educationInfoArray.filter((education) => education.ID !== ID),
          educationInfo,
        ].sort(function (a, b) {
          return a.ID - b.ID;
        })
      );
    }
  };

  function addEducation() {
    setEducationArray([...educationArray, educationCount]);
    setEducationCount((prevEducationCount) => prevEducationCount + 1);
  }

  function removeEducation() {
    setEducationArray([
      ...educationArray.filter((education) => education !== educationCount - 1),
    ]);
    setEducationInfoArray([
      ...educationInfoArray.filter(
        (education) => education.ID !== educationCount - 1
      ),
    ]);
    if (educationCount > 1) {
      setEducationCount((prevEducationCount) => prevEducationCount - 1);
    }
  }

  return (
    <div className="flex flex-col flex-grow box-border w-1/2 p-4 gap-3 bg-gray-300">
      <h2 className="text-2xl font-bold text-gray-800">Education</h2>
      {educationArray.map((id) => (
        <EducationForm
          key={id}
          IDProp={id}
          getEducationInfo={getEducationInfo}
        />
      ))}
      <button onClick={addEducation} className="bg-white rounded-lg">
        Add Education
      </button>
      <button onClick={removeEducation} className="bg-white rounded-lg">
        Remove Education
      </button>
    </div>
  );
};

export default EducationFormHandler;
