import React from "react";
import "./DisplayDisease.css";
import { Link, useLocation } from "react-router-dom";
import Aerobic_Exercise from "../data/Aerobic_Exercise";
import Children_Exercise from "../data/Children_Disease";
import Pilate_Exercise from "../data/Pilate_Exercise";
import Yoga_Asan from "../data/Yoga_Asan";
import Get_Started_With_Smallpdf from "../pdf/Get_Started_With_Smallpdf.pdf";

const DisplayExercise = () => {
  const location = useLocation();
  const { value, name } = location.state || {};
  let selectedData;
  if (name === "aerobic") {
    selectedData = Aerobic_Exercise.find((disease) => disease.id === value);
  } else if (name === "pilate") {
    selectedData = Pilate_Exercise.find((disease) => disease.id === value);
  } else if (name === "childExe") {
    selectedData = Children_Exercise.find((disease) => disease.id === value);
  } else {
    selectedData = Yoga_Asan.find((disease) => disease.id === value);
  }

  return (
    <>
      <div className="container-fluid p-0 text-bg-info">
        <h1 className="text-center mt-2 text-bg-primary">
          {selectedData ? selectedData.title : "Exercise Overview"}
        </h1>
        <div
          className="text-center d-flex flex-wrap align-items-center justify-content-center gap-4"
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "1rem",
          }}>
          {selectedData ? (
            <div className="text-left text-white">
              <h2>{selectedData.title}</h2>
              <p>{selectedData.description}</p>

              <h3>Benefits:</h3>
              <ul>
                {selectedData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h3>Types of Classes:</h3>
              {selectedData.types_of_classes.map((type, index) => (
                <div key={index}>
                  <h4>{type.type}</h4>
                  <p>{type.description}</p>
                </div>
              ))}

              <h3>General Steps:</h3>
              {selectedData.general_steps.map((stepGroup, index) => (
                <div key={index}>
                  <h4>{stepGroup.heading}</h4>
                  <ul>
                    {stepGroup.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h3>Tips:</h3>
              <ul>
                {selectedData.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>

              <h3>Modifications:</h3>
              {selectedData.modifications.map((modification, index) => (
                <div key={index}>
                  <h4>For {modification.for}:</h4>
                  <p>{modification.description}</p>
                </div>
              ))}

              <h3>Safety Tips:</h3>
              <ul>
                {selectedData.safety_tips.map((safetyTip, index) => (
                  <li key={index}>{safetyTip}</li>
                ))}
              </ul>

              <h3>Notes:</h3>
              {selectedData.notes.map((note, index) => (
                <div key={index}>
                  <h4>{note.subheading}</h4>
                  <ul>
                    {note.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3>Download PDF</h3>

                <a
                  href={Get_Started_With_Smallpdf} // Replace with the actual path to your PDF file
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2">
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <p>No data available for this exercise.</p>
          )}

          {name === "aerobic" && (
            <Link
              to="/exercise/aerobicExercise"
              className="btn btn-success mt-4">
              Back to All Exercises
            </Link>
          )}
          {name === "pilate" && (
            <Link
              to="/exercise/aerobicExercise"
              className="btn btn-success mt-4">
              Back to All Exercises
            </Link>
          )}
          {name === "childEx" && (
            <Link
              to="/exercise/aerobicExercise"
              className="btn btn-success mt-4">
              Back to All Exercises
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayExercise;
