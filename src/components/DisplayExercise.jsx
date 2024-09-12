import React from "react";
import "./DisplayExercise.css";
import { Link, useLocation } from "react-router-dom";
import Aerobic_Exercise from "../data/Aerobic_Exercise";
import Pilate_Exercise from "../data/Pilate_Exercise";
import Yoga_Asan from "../data/Yoga_Asan";

const DisplayExercise = () => {
  const location = useLocation();
  const { value, name } = location.state || {};
  let selectedData;

  // Determine which dataset to use based on the "name" value
  if (name === "aerobic") {
    selectedData = Aerobic_Exercise.find((exercise) => exercise.id === value);
  } else if (name === "pilate") {
    selectedData = Pilate_Exercise.find((exercise) => exercise.id === value);
  } else {
    selectedData = Yoga_Asan.find((exercise) => exercise.id === value);
  }

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
              const parts = benefit.split(":");
              return (
                <li key={index} className="list-group-item">
                  <strong>{parts[0]}</strong>: {parts[1]}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Types of Classes or Common Drills Section */}
      {selectedData.types && (
        <section>
          <h3 className="section-title">Types of Classes:</h3>
          {selectedData.types.map((type, index) => (
            <div key={index} className="type-item">
              <h4>{type.name}</h4>
              <p>{type.description}</p>
            </div>
          ))}
        </section>
      )}

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

      {/* General Steps or Starting Position Section */}
      {selectedData.steps && (
        <section>
          <h3 className="section-title">General Steps:</h3>
          {selectedData.steps.map((step, index) => (
            <div key={index} className="step-item">
              <h4>{step.step}</h4>
              <p>
                {Array.isArray(step.description)
                  ? step.description.join(", ")
                  : step.description}
              </p>
            </div>
          ))}
        </section>
      )}

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
            {selectedData.tips.map((tip, index) => (
              <li key={index} className="list-group-item">
                {tip}
              </li>
            ))}
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
            {selectedData.safety_tips.map((safetyTip, index) => (
              <li key={index} className="list-group-item">
                {safetyTip}
              </li>
            ))}
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
