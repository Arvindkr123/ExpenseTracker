import React from "react";
import Resume from "./components/Resume";

const App = () => {
  const resume = {
    experience: [{ year: 2012, company: "xyz", role: "something" }],
    education: [
      {
        name: "Wilton High School",
        url: "http://www.wiltonhighschool.org/pages/Wilton_High_School",
      },
      {
        name: "Silvermine School of Arts",
        url: "https://www.silvermineart.org/",
      },
      { name: "Codeacademy" },
    ],
    skills: ["React.js", "Node.js"],
  };

  return (
    <div>
      <Resume
        experience={resume.experience}
        education={resume.education}
        skills={resume.skills}
      />
    </div>
  );
};

export default App;
