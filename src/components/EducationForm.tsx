import * as React from "react";
import { useState, useEffect } from "react";

type ExperienceFormProps = {
  IDProp: number;
  getEducationInfo: Function;
};

const EducationForm = (props: ExperienceFormProps) => {
  const [degree, setDegree] = useState<string | null>("");
  const [subject, setSubject] = useState<string | null>("");
  const [universityName, setUniversityName] = useState<string | null>("");
  const [cityName, setCityName] = useState<string | null>("");
  const [startDate, setStartDate] = useState<number | null>(undefined);
  const [endDate, setEndDate] = useState<number | null>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.getEducationInfo(
      props.IDProp,
      degree,
      subject,
      universityName,
      cityName,
      startDate,
      endDate
    );
  };

  return (
    <form
      className="flex flex-col flex-grow box-border gap-3 bg-gray-300"
      onSubmit={handleSubmit}
      id={String(props.IDProp)}
    >
      <div className="text-xl font-bold text-gray-800">
        Education {props.IDProp}
      </div>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className="rounded-lg"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="rounded-lg"
      />
      <input
        type="text"
        placeholder="University Name"
        value={universityName}
        onChange={(e) => setUniversityName(e.target.value)}
        className="rounded-lg"
      />
      <input
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="rounded-lg"
      />
      <input
        type="number"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(Number(e.target.value))}
        className="rounded-lg"
      />
      <input
        type="number"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(Number(e.target.value))}
        className="rounded-lg"
      />
      <button type="submit" className="bg-white rounded-lg">
        submit
      </button>
    </form>
  );
};

export default EducationForm;
