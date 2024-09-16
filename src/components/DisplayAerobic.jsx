import React from "react";
import "./DisplayAerobic.css";
import { Link, useLocation } from "react-router-dom";
import Aerobic_Exercise from "../data/Aerobic_Exercise";

const DisplayExercise = () => {
  const location = useLocation();
  const { value } = location.state || {};
  const selectedData = Aerobic_Exercise.find(
    (exercise) => exercise.id === value
  );

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/aerobicExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Benefits Section */}
      {selectedData.benefits && (
        <section>
          <h3 className="section-title">Benefits:</h3>
          <ul className="list-group">
            {selectedData.benefits.map((benefit, index) => {
              const [key, value] = benefit.split(":");
              return (
                <li key={index} className="list-group-item">
                  <strong>{key}</strong>: {value}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Types of Classes Section */}
      {selectedData.types && (
        <section>
          <h3 className="section-title">Types of Classes:</h3>
          {selectedData.types.map((type, index) => (
            <div key={index} className="type-item">
              <h4>{type.name} :</h4>
              <p>{type.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Common Drills Section */}
      {selectedData.common_drills && (
        <section>
          <h3 className="section-title">Common Drills:</h3>
          {selectedData.common_drills.map((drill, index) => (
            <div key={index} className="drill-item">
              <h4>{drill.name}</h4>
              <p>
                <strong>Setup:</strong> {drill.setup}
              </p>
              <p>
                <strong>Movement:</strong> {drill.movement}
              </p>
              <p>
                <strong>Repetitions:</strong> {drill.repetitions}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* General Steps Section */}
      {selectedData.steps && (
        <section>
          <h3 className="section-title">General Steps:</h3>
          {selectedData.steps.map((step, index) => (
            <div key={index} className="step-item">
              <h4>{step.step} :</h4>
              <p>
                {Array.isArray(step.description)
                  ? step.description.join(", ")
                  : step.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Starting Position Section */}
      {selectedData.starting_position && (
        <section>
          <h3 className="section-title">Starting Position:</h3>
          <p>
            <strong>Warm-Up:</strong> {selectedData.starting_position.warm_up}
          </p>
          <p>
            <strong>Equipment Setup:</strong>{" "}
            {selectedData.starting_position.equipment_setup}
          </p>
          <p>
            <strong>Posture:</strong> {selectedData.starting_position.posture}
          </p>
        </section>
      )}

      {/* Tips Section */}
      {selectedData.tips && (
        <section>
          <h3 className="section-title">Tips:</h3>
          <ul className="list-group">
            {selectedData.tips.map((tip, index) => {
              const [heading, paragraph] = tip.split(":");
              return (
                <li key={index} className="list-group-item">
                  <strong>{heading}:</strong> {paragraph}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Modifications Section */}
      {selectedData.modifications && (
        <section>
          <h3 className="section-title">Modifications:</h3>
          {selectedData.modifications.map((modification, index) => (
            <div key={index} className="modification-item">
              <h4>For {modification.for}:</h4>
              <p>{modification.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Safety Tips Section */}
      {selectedData.safety_tips && (
        <section>
          <h3 className="section-title">Safety Tips:</h3>
          <ul className="list-group">
            {selectedData.safety_tips.map((safetyTip, index) => {
              const [heading, description] = safetyTip.split(":");
              return (
                <li key={index} className="list-group-item">
                  <strong>{heading}:</strong> {description}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <Link to="/exercise/aerobicExercise" className="btn btn-primary mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default DisplayExercise;
