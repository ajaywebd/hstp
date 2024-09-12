import React from "react";
import "./DisplayExercise.css";
import { Link, useLocation } from "react-router-dom"; // Import Link for navigation
import Yoga_Exercise from "./../data/Yoga_Exercise";
// The Bicycle Exercise JSON data

const DisplayPilate = () => {
  const location = useLocation();
  const { value } = location.state || {};
  let selectedData = Yoga_Exercise.find((exercise) => exercise.id === value);

  // If no data is found, return a message
  if (!selectedData) {
    return (
      <div className="container exercise-container mt-4">
        <h1 className="exercise-title">
          No data found for the selected exercise
        </h1>
        <Link to="/exercise/pilateExercise" className="btn btn-primary mt-4">
          Back to All Exercises
        </Link>
      </div>
    );
  }

  return (
    <div className="container exercise-container mt-4">
      <h1 className="exercise-title">{selectedData.title}</h1>
      <p className="exercise-description">{selectedData.description}</p>

      {/* Starting Position Section */}
      {selectedData.starting_position && (
        <section>
          <h3 className="section-title">Starting Position:</h3>
          <ul>
            {Object.entries(selectedData.starting_position).map(
              ([key, value], index) => (
                <li key={index}>
                  <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
                  {value}
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Steps Section */}
      {selectedData.steps && (
        <section>
          <h3 className="section-title">Steps:</h3>
          <ol>
            {selectedData.steps.map((step, index) => (
              <li key={index}>
                {Object.entries(step).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
                    {value}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Repetitions Section */}
      {selectedData.repetitions && (
        <section>
          <h3 className="section-title">Repetitions:</h3>
          <p>{selectedData.repetitions}</p>
        </section>
      )}

      {/* Benefits Section */}
      {selectedData.benefits && (
        <section>
          <h3 className="section-title">Benefits:</h3>
          <ul className="list-group">
            {selectedData.benefits.map((benefit, index) => (
              <li key={index} className="list-group-item">
                {benefit}
              </li>
            ))}
          </ul>
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

      <Link to="/exercise/pilateExercise" className="btn btn-primary mt-4">
        Back to All Exercises
      </Link>
    </div>
  );
};

export default DisplayPilate;
