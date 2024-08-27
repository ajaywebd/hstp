import React, { useState } from "react";
import Male_Disease from "../data/Male_Disease.jsx"; // Importing the JSON data
import { Link, useLocation } from "react-router-dom";

const HomeRemediesForAcne = () => {
  const location = useLocation();
  const { value } = location.state || {}; // Retrieve the passed value from state

  // Find the object where id === 2

  const selectedData = Male_Disease.find((disease) => disease.id === value);

  // Render the content if the object with id === 2 exists
  return (
    <>
      <div className="container my-5">
        {selectedData ? (
          <>
            <h1 className="text-center mb-4">{selectedData.title}</h1>
            <p>{selectedData.description}</p>

            {/* Displaying Remedies */}
            {selectedData.remedies.map((item, index) => (
              <div key={index}>
                <h2>
                  {index + 1}. {item.name}
                </h2>
                <p>
                  <strong>Remedy:</strong> {item.remedy}
                </p>
                <p>
                  <strong>Precaution:</strong> {item.precaution}
                </p>
              </div>
            ))}

            {/* Displaying Preventive Measures */}
            <h3>Preventive Measures:</h3>
            <ul>
              {selectedData.preventive_measures.map((measure, index) => (
                <li key={index}>
                  <strong>{measure.measure}:</strong> {measure.description}
                </li>
              ))}
            </ul>

            {/* Displaying Notes */}
            <h3>Note:</h3>
            <ul>
              {selectedData.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>No data found for the selected ID.</p>
        )}
        <Link to="/disease/maleDisease" className="btn btn-success mb-3">
          Back to All Diseases
        </Link>
      </div>
    </>
  );
};

export default HomeRemediesForAcne;
