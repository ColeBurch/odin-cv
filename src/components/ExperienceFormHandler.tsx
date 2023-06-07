import * as React from "react";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function ExperienceFormHandler() {
  const ExperienceArray = [1];

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    console.log(this.state);
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-grow box-border w-1/2 p-4 gap-3 bg-gray-300"
    >
      <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
      {ExperienceArray.map((id) => (
        <ExperienceForm key={id} IDProp={id} />
      ))}
      <button type="submit" className="bg-white rounded-lg">
        Submit Experience
      </button>
    </form>
  );
}

export default ExperienceFormHandler;
