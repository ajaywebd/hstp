import React from "react";

import "./DisplayDisease.css";
import BMI from "../data/BMI"; // Importing the JSON data
import { useLocation, Link } from "react-router-dom";

const DisplayNutrition = () => {
  const location = useLocation();
  const { selectedAge, selectedBMI, selectedGender } = location.state || {};

  // Find the unique data that matches selectedAge, selectedBMI, and selectedGender
  const selectedData = BMI.find(
    (data) =>
      data.age === selectedAge &&
      data.id === selectedBMI &&
      data.gender === selectedGender
  );

  return (
    <>
      <div className="container-fluid p-0 text-bg-info">
        <h1 className="text-center mt-2 text-bg-primary">
          {selectedData ? selectedData.title : "Nutrition Overview"}
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

              <h3>Remedies:</h3>
              {selectedData.remedies && selectedData.remedies.length > 0 ? (
                <ul>
                  {selectedData.remedies.map((remedy, index) => (
                    <li key={index}>
                      <h4>{remedy.name}</h4>
                      <p>
                        <strong>Remedy:</strong> {remedy.remedy}
                      </p>
                      <p>
                        <strong>Precaution:</strong> {remedy.precaution}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No remedies available.</p>
              )}

              <h3>Preventive Measures:</h3>
              {selectedData.preventive_measures &&
              selectedData.preventive_measures.length > 0 ? (
                <ul>
                  {selectedData.preventive_measures.map((measure, index) => (
                    <li key={index}>
                      <strong>{measure.measure}:</strong> {measure.description}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No preventive measures available.</p>
              )}

              <h3>Notes:</h3>
              {selectedData.notes && selectedData.notes.length > 0 ? (
                <ul>
                  {selectedData.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              ) : (
                <p>No notes available.</p>
              )}
            </div>
          ) : (
            <p>No data available for this selection.</p>
          )}

          <Link to="/nutrition" className="btn btn-success mt-4">
            Back to All Nutrition Options
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayNutrition;
