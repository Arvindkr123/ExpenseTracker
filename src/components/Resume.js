import React from "react";
import "./Resume.css";

const Resume = ({ experience, education, skills }) => {
  return (
    <>
      <div id="header" />
      <div className="left" />
      <div className="stuff">
        <br />
        <br />
        <h1>Resume</h1>
        <h2>Arvind Kumar</h2>
        <hr />
        <br />
        <p className="head">Interests</p>
        <ul>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
        <p className="head">Skills</p>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p className="head">Education</p>
        <ul>
          {education.map((edu, index) => (
            <a href={edu.url} key={index}>
              <li>{edu.name}</li>
            </a>
          ))}
        </ul>
        <p className="head">Experience</p>
        <ul>
          {experience.map((exp, index) => (
            <li key={index}>
              {exp.company}, {exp.role}, {exp.year}
            </li>
          ))}
        </ul>
        <p className="head">Extracurriculars</p>
        <ul>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
      </div>
      <div className="right" />
      <div id="footer">
        <h2 id="name">Arvind Kumar</h2>
      </div>
    </>
  );
};

export default Resume;
