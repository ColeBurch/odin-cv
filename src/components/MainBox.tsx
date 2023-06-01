import * as React from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function MainBox() {
  return (
    <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-screen">
      <PersonalInfoForm />
    </div>
  );
}

export default MainBox;
